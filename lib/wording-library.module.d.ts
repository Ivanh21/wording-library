import { ModuleWithProviders } from '@angular/core';
import { WordingLibraryConfig } from './wording-library.config';
import { WordingLibraryService } from './wording-library.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export declare function initWording(service: WordingLibraryService): () => Promise<boolean>;
export declare class WordingLibraryModule {
    static forRoot(config: WordingLibraryConfig): ModuleWithProviders<WordingLibraryModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WordingLibraryModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<WordingLibraryModule, never, [typeof i1.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<WordingLibraryModule>;
}
