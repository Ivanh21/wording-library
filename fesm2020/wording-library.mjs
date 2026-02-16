import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, APP_INITIALIZER, NgModule } from '@angular/core';
import { lastValueFrom, of, tap } from 'rxjs';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i2 from '@ngx-translate/core';

const WORDING_LIBRARY_CONFIG = new InjectionToken('WORDING_LIBRARY_CONFIG');

class WordingCacheService {
    constructor() {
        this.cache = new Map();
    }
    get(key) {
        return this.cache.has(key) ? this.cache.get(key) : null;
    }
    set(key, value) {
        this.cache.set(key, value);
    }
    has(key) {
        return this.cache.has(key);
    }
    clear(key) {
        if (key)
            this.cache.delete(key);
        else
            this.cache.clear();
    }
}
WordingCacheService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingCacheService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
WordingCacheService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingCacheService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingCacheService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class WordingLibraryService {
    constructor(http, translate, memoryCache, config) {
        this.http = http;
        this.translate = translate;
        this.memoryCache = memoryCache;
        this.config = config;
    }
    // async initVersionCheck(): Promise<boolean> {
    //     const baseUrl = this.config.baseUrl;
    //     try {
    //       const serverVersions = await lastValueFrom(
    //         this.http.get<Record<string, string>>(`${baseUrl}/${this.config.fileConfigVersion}.json`)
    //       );
    //       let hasNewVersion = false;
    //       for (const lang of Object.keys(serverVersions)) {
    //         const localV = localStorage.getItem(`translations_version_${lang}`);
    //         const serverV = serverVersions[lang];
    //         console.log(`Lang=${lang} | local=${localV} | server=${serverV}`);
    //         if (localV !== serverV) {
    //           hasNewVersion = true;
    //           localStorage.removeItem(`translations_${lang}`);
    //           localStorage.setItem(`translations_version_${lang}`, serverV);
    //           await lastValueFrom(this.translate.reloadLang(lang));
    //           const current = this.translate.currentLang || this.translate.defaultLang;
    //           if (current === lang) {
    //             await lastValueFrom(this.translate.use(lang));
    //           }
    //         }
    //       }
    //       return hasNewVersion;
    //     } catch (error) {
    //       console.error('Impossible de vérifier les versions', error);
    //       return false;
    //     }
    //   }
    async initVersionCheck() {
        try {
            const serverVersions = await lastValueFrom(this.http.get(`${this.config.baseUrl}/${this.config.fileConfigVersion}.json`));
            let hasNewVersion = false;
            const currentLang = this.translate.currentLang || this.translate.defaultLang;
            for (const lang of Object.keys(serverVersions)) {
                const localV = this.memoryCache.get(`translations_version_${lang}`);
                const serverV = serverVersions[lang];
                if (localV !== serverV) {
                    hasNewVersion = true;
                    // Invalidation cache mémoire
                    this.memoryCache.clear(`translations_${lang}`);
                    // Mise à jour version en mémoire
                    this.memoryCache.set(`translations_version_${lang}`, serverV);
                    // Reload seulement si la langue active a changé
                    if (currentLang === lang) {
                        await lastValueFrom(this.translate.reloadLang(lang));
                        //await lastValueFrom(this.translate.use(lang));
                    }
                }
            }
            return hasNewVersion;
        }
        catch (error) {
            console.error('Impossible de vérifier les versions', error);
            return false;
        }
    }
}
WordingLibraryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingLibraryService, deps: [{ token: i1.HttpClient }, { token: i2.TranslateService }, { token: WordingCacheService }, { token: WORDING_LIBRARY_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
WordingLibraryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingLibraryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.TranslateService }, { type: WordingCacheService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [WORDING_LIBRARY_CONFIG]
                }] }]; } });

class WordingCustomLoader {
    constructor(http, config, cache) {
        this.http = http;
        this.config = config;
        this.cache = cache;
    }
    getTranslation(lang) {
        const key = `translations_${lang}`;
        const cached = this.cache.get(key);
        if (cached) {
            return of(cached);
        }
        return this.http
            .get(`${this.config.baseUrl}/${lang}.json`)
            .pipe(tap(translations => this.cache.set(key, translations)));
    }
}

function initWording(service) {
    return () => service.initVersionCheck();
}
class WordingLibraryModule {
    static forRoot(config) {
        return {
            ngModule: WordingLibraryModule,
            providers: [
                { provide: WORDING_LIBRARY_CONFIG, useValue: config },
                WordingLibraryService,
                {
                    provide: APP_INITIALIZER,
                    useFactory: initWording,
                    deps: [WordingLibraryService],
                    multi: true
                }
            ]
        };
    }
}
WordingLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
WordingLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: WordingLibraryModule, imports: [HttpClientModule] });
WordingLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingLibraryModule, imports: [HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        HttpClientModule
                    ],
                    exports: []
                }]
        }] });

/*
 * Public API Surface of wording-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { WORDING_LIBRARY_CONFIG, WordingCacheService, WordingCustomLoader, WordingLibraryModule, WordingLibraryService, initWording };
//# sourceMappingURL=wording-library.mjs.map
