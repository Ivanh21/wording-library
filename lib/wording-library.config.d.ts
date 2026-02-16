import { InjectionToken } from "@angular/core";
export interface WordingLibraryConfig {
    baseUrl: string;
    fileConfigVersion: string;
}
export declare const WORDING_LIBRARY_CONFIG: InjectionToken<WordingLibraryConfig>;
