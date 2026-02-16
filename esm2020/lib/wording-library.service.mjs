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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZGluZy1saWJyYXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JkaW5nLWxpYnJhcnkvc3JjL2xpYi93b3JkaW5nLWxpYnJhcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQXdCLE1BQU0sMEJBQTBCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFNckMsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUNVLElBQWdCLEVBQ2hCLFNBQTJCLEVBQzNCLFdBQXdDLEVBQ1IsTUFBNEI7UUFINUQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBNkI7UUFDUixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNuRSxDQUFDO0lBRUosK0NBQStDO0lBQy9DLDJDQUEyQztJQUMzQyxZQUFZO0lBRVosb0RBQW9EO0lBQ3BELG9HQUFvRztJQUNwRyxXQUFXO0lBRVgsbUNBQW1DO0lBRW5DLDBEQUEwRDtJQUUxRCwrRUFBK0U7SUFDL0UsZ0RBQWdEO0lBRWhELDZFQUE2RTtJQUU3RSxvQ0FBb0M7SUFFcEMsa0NBQWtDO0lBRWxDLDZEQUE2RDtJQUM3RCwyRUFBMkU7SUFFM0Usa0VBQWtFO0lBRWxFLHNGQUFzRjtJQUV0RixvQ0FBb0M7SUFDcEMsNkRBQTZEO0lBQzdELGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUVWLDhCQUE4QjtJQUU5Qix3QkFBd0I7SUFDeEIscUVBQXFFO0lBQ3JFLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsTUFBTTtJQUVKLEtBQUssQ0FBQyxnQkFBZ0I7UUFFbEIsSUFBSTtZQUNGLE1BQU0sY0FBYyxHQUFHLE1BQU0sYUFBYSxDQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBeUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixPQUFPLENBQUMsQ0FDdEcsQ0FBQztZQUVGLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztZQUUxQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztZQUU3RSxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBRTlDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLHdCQUF3QixJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRSxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXJDLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtvQkFFdEIsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFFckIsNkJBQTZCO29CQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFFL0MsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBRTlELGdEQUFnRDtvQkFDaEQsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO3dCQUN4QixNQUFNLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyRCxnREFBZ0Q7cUJBQ2pEO2lCQUNGO2FBQ0Y7WUFFRCxPQUFPLGFBQWEsQ0FBQztTQUV0QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1RCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7bUhBM0ZNLHFCQUFxQiwrR0FNdEIsc0JBQXNCO3VIQU5yQixxQkFBcUIsY0FGcEIsTUFBTTs0RkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFPSSxNQUFNOzJCQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFdPUkRJTkdfTElCUkFSWV9DT05GSUcsIFdvcmRpbmdMaWJyYXJ5Q29uZmlnIH0gZnJvbSAnLi93b3JkaW5nLWxpYnJhcnkuY29uZmlnJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdvcmRpbmdDYWNoZVNlcnZpY2UgfSBmcm9tICcuL3dvcmRpbmctY2FjaGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRpbmdMaWJyYXJ5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVtb3J5Q2FjaGU6IFdvcmRpbmdDYWNoZVNlcnZpY2U8c3RyaW5nPixcbiAgICBASW5qZWN0KFdPUkRJTkdfTElCUkFSWV9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBXb3JkaW5nTGlicmFyeUNvbmZpZ1xuICApIHt9XG5cbiAgLy8gYXN5bmMgaW5pdFZlcnNpb25DaGVjaygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgLy8gICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLmNvbmZpZy5iYXNlVXJsO1xuICAvLyAgICAgdHJ5IHtcbiAgICBcbiAgLy8gICAgICAgY29uc3Qgc2VydmVyVmVyc2lvbnMgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAvLyAgICAgICAgIHRoaXMuaHR0cC5nZXQ8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oYCR7YmFzZVVybH0vJHt0aGlzLmNvbmZpZy5maWxlQ29uZmlnVmVyc2lvbn0uanNvbmApXG4gIC8vICAgICAgICk7XG4gICAgXG4gIC8vICAgICAgIGxldCBoYXNOZXdWZXJzaW9uID0gZmFsc2U7XG4gICAgXG4gIC8vICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBPYmplY3Qua2V5cyhzZXJ2ZXJWZXJzaW9ucykpIHtcbiAgICBcbiAgLy8gICAgICAgICBjb25zdCBsb2NhbFYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdHJhbnNsYXRpb25zX3ZlcnNpb25fJHtsYW5nfWApO1xuICAvLyAgICAgICAgIGNvbnN0IHNlcnZlclYgPSBzZXJ2ZXJWZXJzaW9uc1tsYW5nXTtcbiAgICBcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhgTGFuZz0ke2xhbmd9IHwgbG9jYWw9JHtsb2NhbFZ9IHwgc2VydmVyPSR7c2VydmVyVn1gKTtcbiAgICBcbiAgLy8gICAgICAgICBpZiAobG9jYWxWICE9PSBzZXJ2ZXJWKSB7XG4gICAgXG4gIC8vICAgICAgICAgICBoYXNOZXdWZXJzaW9uID0gdHJ1ZTtcbiAgXG4gIC8vICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgdHJhbnNsYXRpb25zXyR7bGFuZ31gKTtcbiAgLy8gICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0cmFuc2xhdGlvbnNfdmVyc2lvbl8ke2xhbmd9YCwgc2VydmVyVik7XG4gICAgXG4gIC8vICAgICAgICAgICBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLnJlbG9hZExhbmcobGFuZykpO1xuICAgIFxuICAvLyAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nIHx8IHRoaXMudHJhbnNsYXRlLmRlZmF1bHRMYW5nO1xuICAgIFxuICAvLyAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IGxhbmcpIHtcbiAgLy8gICAgICAgICAgICAgYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS51c2UobGFuZykpO1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAgIFxuICAvLyAgICAgICByZXR1cm4gaGFzTmV3VmVyc2lvbjtcbiAgICBcbiAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ltcG9zc2libGUgZGUgdsOpcmlmaWVyIGxlcyB2ZXJzaW9ucycsIGVycm9yKTtcbiAgLy8gICAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAgIGFzeW5jIGluaXRWZXJzaW9uQ2hlY2soKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJWZXJzaW9ucyA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KGAke3RoaXMuY29uZmlnLmJhc2VVcmx9LyR7dGhpcy5jb25maWcuZmlsZUNvbmZpZ1ZlcnNpb259Lmpzb25gKVxuICAgICAgICAgICk7XG4gICAgICBcbiAgICAgICAgICBsZXQgaGFzTmV3VmVyc2lvbiA9IGZhbHNlO1xuICAgICAgXG4gICAgICAgICAgY29uc3QgY3VycmVudExhbmcgPSB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyB8fCB0aGlzLnRyYW5zbGF0ZS5kZWZhdWx0TGFuZztcbiAgICAgIFxuICAgICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBPYmplY3Qua2V5cyhzZXJ2ZXJWZXJzaW9ucykpIHtcbiAgICAgIFxuICAgICAgICAgICAgY29uc3QgbG9jYWxWID0gdGhpcy5tZW1vcnlDYWNoZS5nZXQoYHRyYW5zbGF0aW9uc192ZXJzaW9uXyR7bGFuZ31gKTtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlclYgPSBzZXJ2ZXJWZXJzaW9uc1tsYW5nXTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGxvY2FsViAhPT0gc2VydmVyVikge1xuICAgICAgXG4gICAgICAgICAgICAgIGhhc05ld1ZlcnNpb24gPSB0cnVlO1xuICAgICAgXG4gICAgICAgICAgICAgIC8vIEludmFsaWRhdGlvbiBjYWNoZSBtw6ltb2lyZVxuICAgICAgICAgICAgICB0aGlzLm1lbW9yeUNhY2hlLmNsZWFyKGB0cmFuc2xhdGlvbnNfJHtsYW5nfWApO1xuICAgICAgXG4gICAgICAgICAgICAgIC8vIE1pc2Ugw6Agam91ciB2ZXJzaW9uIGVuIG3DqW1vaXJlXG4gICAgICAgICAgICAgIHRoaXMubWVtb3J5Q2FjaGUuc2V0KGB0cmFuc2xhdGlvbnNfdmVyc2lvbl8ke2xhbmd9YCwgc2VydmVyVik7XG4gICAgICBcbiAgICAgICAgICAgICAgLy8gUmVsb2FkIHNldWxlbWVudCBzaSBsYSBsYW5ndWUgYWN0aXZlIGEgY2hhbmfDqVxuICAgICAgICAgICAgICBpZiAoY3VycmVudExhbmcgPT09IGxhbmcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLnJlbG9hZExhbmcobGFuZykpO1xuICAgICAgICAgICAgICAgIC8vYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS51c2UobGFuZykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgcmV0dXJuIGhhc05ld1ZlcnNpb247XG4gICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbXBvc3NpYmxlIGRlIHbDqXJpZmllciBsZXMgdmVyc2lvbnMnLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbn1cbiJdfQ==