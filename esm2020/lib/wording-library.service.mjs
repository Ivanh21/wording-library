import { Inject, Injectable } from '@angular/core';
import { WORDING_LIBRARY_CONFIG } from './wording-library.config';
import { lastValueFrom } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngx-translate/core";
import * as i3 from "./wording-cache.service";
export class WordingLibraryService {
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
WordingLibraryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingLibraryService, deps: [{ token: i1.HttpClient }, { token: i2.TranslateService }, { token: i3.WordingCacheService }, { token: WORDING_LIBRARY_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
WordingLibraryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingLibraryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.TranslateService }, { type: i3.WordingCacheService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [WORDING_LIBRARY_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZGluZy1saWJyYXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JkaW5nLWxpYnJhcnkvc3JjL2xpYi93b3JkaW5nLWxpYnJhcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQXdCLE1BQU0sMEJBQTBCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFNckMsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUNVLElBQWdCLEVBQ2hCLFNBQTJCLEVBQzNCLFdBQWdDLEVBQ0EsTUFBNEI7UUFINUQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDQSxXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNuRSxDQUFDO0lBRUosK0NBQStDO0lBQy9DLDJDQUEyQztJQUMzQyxZQUFZO0lBRVosb0RBQW9EO0lBQ3BELG9HQUFvRztJQUNwRyxXQUFXO0lBRVgsbUNBQW1DO0lBRW5DLDBEQUEwRDtJQUUxRCwrRUFBK0U7SUFDL0UsZ0RBQWdEO0lBRWhELDZFQUE2RTtJQUU3RSxvQ0FBb0M7SUFFcEMsa0NBQWtDO0lBRWxDLDZEQUE2RDtJQUM3RCwyRUFBMkU7SUFFM0Usa0VBQWtFO0lBRWxFLHNGQUFzRjtJQUV0RixvQ0FBb0M7SUFDcEMsNkRBQTZEO0lBQzdELGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUVWLDhCQUE4QjtJQUU5Qix3QkFBd0I7SUFDeEIscUVBQXFFO0lBQ3JFLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsTUFBTTtJQUVKLEtBQUssQ0FBQyxnQkFBZ0I7UUFFbEIsSUFBSTtZQUNGLE1BQU0sY0FBYyxHQUFHLE1BQU0sYUFBYSxDQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBeUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixPQUFPLENBQUMsQ0FDdEcsQ0FBQztZQUVGLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztZQUUxQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztZQUU3RSxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBRTlDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFTLHdCQUF3QixJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RSxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXJDLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtvQkFFdEIsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFFckIsNkJBQTZCO29CQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFFL0MsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBRTlELGdEQUFnRDtvQkFDaEQsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO3dCQUN4QixNQUFNLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyRCxnREFBZ0Q7cUJBQ2pEO2lCQUNGO2FBQ0Y7WUFFRCxPQUFPLGFBQWEsQ0FBQztTQUV0QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1RCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7bUhBM0ZNLHFCQUFxQiwrR0FNdEIsc0JBQXNCO3VIQU5yQixxQkFBcUIsY0FGcEIsTUFBTTs0RkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFPSSxNQUFNOzJCQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFdPUkRJTkdfTElCUkFSWV9DT05GSUcsIFdvcmRpbmdMaWJyYXJ5Q29uZmlnIH0gZnJvbSAnLi93b3JkaW5nLWxpYnJhcnkuY29uZmlnJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdvcmRpbmdDYWNoZVNlcnZpY2UgfSBmcm9tICcuL3dvcmRpbmctY2FjaGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRpbmdMaWJyYXJ5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVtb3J5Q2FjaGU6IFdvcmRpbmdDYWNoZVNlcnZpY2UsXG4gICAgQEluamVjdChXT1JESU5HX0xJQlJBUllfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogV29yZGluZ0xpYnJhcnlDb25maWdcbiAgKSB7fVxuXG4gIC8vIGFzeW5jIGluaXRWZXJzaW9uQ2hlY2soKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIC8vICAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5jb25maWcuYmFzZVVybDtcbiAgLy8gICAgIHRyeSB7XG4gICAgXG4gIC8vICAgICAgIGNvbnN0IHNlcnZlclZlcnNpb25zID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgLy8gICAgICAgICB0aGlzLmh0dHAuZ2V0PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KGAke2Jhc2VVcmx9LyR7dGhpcy5jb25maWcuZmlsZUNvbmZpZ1ZlcnNpb259Lmpzb25gKVxuICAvLyAgICAgICApO1xuICAgIFxuICAvLyAgICAgICBsZXQgaGFzTmV3VmVyc2lvbiA9IGZhbHNlO1xuICAgIFxuICAvLyAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgT2JqZWN0LmtleXMoc2VydmVyVmVyc2lvbnMpKSB7XG4gICAgXG4gIC8vICAgICAgICAgY29uc3QgbG9jYWxWID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRyYW5zbGF0aW9uc192ZXJzaW9uXyR7bGFuZ31gKTtcbiAgLy8gICAgICAgICBjb25zdCBzZXJ2ZXJWID0gc2VydmVyVmVyc2lvbnNbbGFuZ107XG4gICAgXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coYExhbmc9JHtsYW5nfSB8IGxvY2FsPSR7bG9jYWxWfSB8IHNlcnZlcj0ke3NlcnZlclZ9YCk7XG4gICAgXG4gIC8vICAgICAgICAgaWYgKGxvY2FsViAhPT0gc2VydmVyVikge1xuICAgIFxuICAvLyAgICAgICAgICAgaGFzTmV3VmVyc2lvbiA9IHRydWU7XG4gIFxuICAvLyAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYHRyYW5zbGF0aW9uc18ke2xhbmd9YCk7XG4gIC8vICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdHJhbnNsYXRpb25zX3ZlcnNpb25fJHtsYW5nfWAsIHNlcnZlclYpO1xuICAgIFxuICAvLyAgICAgICAgICAgYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5yZWxvYWRMYW5nKGxhbmcpKTtcbiAgICBcbiAgLy8gICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyB8fCB0aGlzLnRyYW5zbGF0ZS5kZWZhdWx0TGFuZztcbiAgICBcbiAgLy8gICAgICAgICAgIGlmIChjdXJyZW50ID09PSBsYW5nKSB7XG4gIC8vICAgICAgICAgICAgIGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUudXNlKGxhbmcpKTtcbiAgLy8gICAgICAgICAgIH1cbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cbiAgICBcbiAgLy8gICAgICAgcmV0dXJuIGhhc05ld1ZlcnNpb247XG4gICAgXG4gIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgICBjb25zb2xlLmVycm9yKCdJbXBvc3NpYmxlIGRlIHbDqXJpZmllciBsZXMgdmVyc2lvbnMnLCBlcnJvcik7XG4gIC8vICAgICAgIHJldHVybiBmYWxzZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgICBhc3luYyBpbml0VmVyc2lvbkNoZWNrKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2VydmVyVmVyc2lvbnMgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICAgICAgdGhpcy5odHRwLmdldDxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihgJHt0aGlzLmNvbmZpZy5iYXNlVXJsfS8ke3RoaXMuY29uZmlnLmZpbGVDb25maWdWZXJzaW9ufS5qc29uYClcbiAgICAgICAgICApO1xuICAgICAgXG4gICAgICAgICAgbGV0IGhhc05ld1ZlcnNpb24gPSBmYWxzZTtcbiAgICAgIFxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRMYW5nID0gdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgfHwgdGhpcy50cmFuc2xhdGUuZGVmYXVsdExhbmc7XG4gICAgICBcbiAgICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgT2JqZWN0LmtleXMoc2VydmVyVmVyc2lvbnMpKSB7XG4gICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsViA9IHRoaXMubWVtb3J5Q2FjaGUuZ2V0PHN0cmluZz4oYHRyYW5zbGF0aW9uc192ZXJzaW9uXyR7bGFuZ31gKTtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlclYgPSBzZXJ2ZXJWZXJzaW9uc1tsYW5nXTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGxvY2FsViAhPT0gc2VydmVyVikge1xuICAgICAgXG4gICAgICAgICAgICAgIGhhc05ld1ZlcnNpb24gPSB0cnVlO1xuICAgICAgXG4gICAgICAgICAgICAgIC8vIEludmFsaWRhdGlvbiBjYWNoZSBtw6ltb2lyZVxuICAgICAgICAgICAgICB0aGlzLm1lbW9yeUNhY2hlLmNsZWFyKGB0cmFuc2xhdGlvbnNfJHtsYW5nfWApO1xuICAgICAgXG4gICAgICAgICAgICAgIC8vIE1pc2Ugw6Agam91ciB2ZXJzaW9uIGVuIG3DqW1vaXJlXG4gICAgICAgICAgICAgIHRoaXMubWVtb3J5Q2FjaGUuc2V0KGB0cmFuc2xhdGlvbnNfdmVyc2lvbl8ke2xhbmd9YCwgc2VydmVyVik7XG4gICAgICBcbiAgICAgICAgICAgICAgLy8gUmVsb2FkIHNldWxlbWVudCBzaSBsYSBsYW5ndWUgYWN0aXZlIGEgY2hhbmfDqVxuICAgICAgICAgICAgICBpZiAoY3VycmVudExhbmcgPT09IGxhbmcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLnJlbG9hZExhbmcobGFuZykpO1xuICAgICAgICAgICAgICAgIC8vYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS51c2UobGFuZykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgcmV0dXJuIGhhc05ld1ZlcnNpb247XG4gICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbXBvc3NpYmxlIGRlIHbDqXJpZmllciBsZXMgdmVyc2lvbnMnLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbn1cbiJdfQ==