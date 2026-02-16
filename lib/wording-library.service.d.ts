import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { WordingLibraryConfig } from './wording-library.config';
import { WordingCacheService } from './wording-cache.service';
import * as i0 from "@angular/core";
export declare class WordingLibraryService {
    private http;
    private translate;
    private memoryCache;
    private config;
    constructor(http: HttpClient, translate: TranslateService, memoryCache: WordingCacheService<string>, config: WordingLibraryConfig);
    initVersionCheck(): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WordingLibraryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WordingLibraryService>;
}
