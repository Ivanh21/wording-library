import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WORDING_LIBRARY_CONFIG } from './wording-library.config';
import { WordingLibraryService } from './wording-library.service';
import * as i0 from "@angular/core";
export function initWording(service) {
    return () => service.initVersionCheck();
}
export class WordingLibraryModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZGluZy1saWJyYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmRpbmctbGlicmFyeS9zcmMvbGliL3dvcmRpbmctbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBd0IsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFbEUsTUFBTSxVQUFVLFdBQVcsQ0FBQyxPQUE4QjtJQUN4RCxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQzFDLENBQUM7QUFhRCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBNEI7UUFDekMsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ3JELHFCQUFxQjtnQkFDckI7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxXQUFXO29CQUN2QixJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDN0IsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztrSEFoQlUsb0JBQW9CO21IQUFwQixvQkFBb0IsWUFON0IsZ0JBQWdCO21IQU1QLG9CQUFvQixZQU43QixnQkFBZ0I7NEZBTVAsb0JBQW9CO2tCQVhoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUViO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRSxFQUVSO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV29yZGluZ0xpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL3dvcmRpbmctbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdPUkRJTkdfTElCUkFSWV9DT05GSUcsIFdvcmRpbmdMaWJyYXJ5Q29uZmlnIH0gZnJvbSAnLi93b3JkaW5nLWxpYnJhcnkuY29uZmlnJztcbmltcG9ydCB7IFdvcmRpbmdMaWJyYXJ5U2VydmljZSB9IGZyb20gJy4vd29yZGluZy1saWJyYXJ5LnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdvcmRpbmcoc2VydmljZTogV29yZGluZ0xpYnJhcnlTZXJ2aWNlKSB7XG4gIHJldHVybiAoKSA9PiBzZXJ2aWNlLmluaXRWZXJzaW9uQ2hlY2soKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXb3JkaW5nTGlicmFyeU1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBXb3JkaW5nTGlicmFyeUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8V29yZGluZ0xpYnJhcnlNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFdvcmRpbmdMaWJyYXJ5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogV09SRElOR19MSUJSQVJZX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICBXb3JkaW5nTGlicmFyeVNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogaW5pdFdvcmRpbmcsXG4gICAgICAgICAgZGVwczogW1dvcmRpbmdMaWJyYXJ5U2VydmljZV0sXG4gICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuIH1cbiJdfQ==