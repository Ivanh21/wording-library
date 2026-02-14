import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { WordingLibraryConfig } from "./wording-library.config";
import { WordingCacheService } from "./wording-cache.service";
export declare class WordingCustomLoader implements TranslateLoader {
    private http;
    private config;
    private cache;
    constructor(http: HttpClient, config: WordingLibraryConfig, cache: WordingCacheService);
    getTranslation(lang: string): Observable<any>;
}
