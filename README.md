# WordingLibrary

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

# Install

	npm install /location/to/wording-library-0.0.1.tgz 

# Install ngx-translate

	npm install @ngx-translate/core @ngx-translate/http-loader

L'idéal est d'utiliser la version 14 & 7 qui sont plus stable : 
	
	npm install @ngx-translate/core@14 @ngx-translate/http-loader@7

# For Angular 15, 16

Config app.module.ts :


	import { NgModule } from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';

	import { AppRoutingModule } from './app-routing.module';
	import { AppComponent } from './app.component';
	import {HttpClient, HttpClientModule} from '@angular/common/http';
	import { TRANSLATE_HTTP_LOADER_CONFIG, TranslateHttpLoader } from '@ngx-translate/http-loader';
	import { TranslateLoader, TranslateModule, TranslationObject } from '@ngx-translate/core';
	import { last } from 'rxjs';
	import { WordingLibraryModule } from 'wording-library';

	export function httpLoaderFactory(http: HttpClient) {
  		return new TranslateHttpLoader(http, '/i18n/, '.json');
	}


	@NgModule({
  	declarations: [
    	AppComponent
  	],
  	imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
		deps: [HttpClient]
      }
    }),
     WordingLibraryModule.forRoot({
        baseUrl: '/i18n', //Répertoire ou lien vers vos fichiers de traductions. 
        fileConfigVersion: "versions" //Nom du fichier de config contenant les versions de vos langues.
      })
  	],
  	providers: [],
 	 bootstrap: [AppComponent]
	})
	export class AppModule { }


# For Angular 17+
  
Configuration app.config.ts :

	import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
	import { provideRouter } from '@angular/router';

	import { routes } from './app.routes';
	import { HttpClient, provideHttpClient } from '@angular/common/http';
	import {WordingLibraryModule} from 'wording-library';
	import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
	import { TranslateHttpLoader } from '@ngx-translate/http-loader';

	export function HttpLoaderFactory(http: HttpClient) {
  	return new TranslateHttpLoader(http, '/i18n/', '.json');
	}

	export const appConfig: ApplicationConfig = {
  	providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
      WordingLibraryModule.forRoot({
        baseUrl: '/i18n', //Répertoire ou lien vers vos fichiers de traductions.
        fileConfigVersion: "versions" //Nom du fichier de config contenant les versions de vos langues.
      })
     ),
    
  	]
	};

# Au cas où il faut utiliser la dernière version de ngx-translate qui est la 17 actuellement 

  Pour angular 15, 16 :

	import { NgModule } from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';

	import { AppRoutingModule } from './app-routing.module';
	import { AppComponent } from './app.component';
	import {HttpClient, HttpClientModule} from '@angular/common/http';
	import { TRANSLATE_HTTP_LOADER_CONFIG, TranslateHttpLoader } from '@ngx-translate/http-loader';
	import { TranslateLoader, TranslateModule, TranslationObject } from '@ngx-translate/core';
	import { last } from 'rxjs';
	import { WordingLibraryModule } from 'wording-library';

	export function httpLoaderFactory(): TranslateLoader {
 	 return new TranslateHttpLoader();
	}

	@NgModule({
  	declarations: [
    AppComponent
  	],
  	imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
      }
    }),
     WordingLibraryModule.forRoot({
        baseUrl: '/i18n', //Répertoire ou lien vers vos fichiers de traductions.
        fileConfigVersion: "versions" //Nom du fichier de config contenant les versions de vos langues.
      })
  	],
  	providers: [
      {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: '/i18n/', //Répertoire ou lien vers vos fichiers de traductions.
        suffix: '.json'
      }
    }
  	],
  	bootstrap: [AppComponent]
	})
	export class AppModule { }

Pour angular 17+ :

	import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
	import { provideRouter } from '@angular/router';

	import { routes } from './app.routes';
	import { provideHttpClient } from '@angular/common/http';
	import { WordingLibraryModule } from 'wording-library';
	import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
	import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';

	export function HttpLoaderFactory(): TranslateLoader {
  		return new TranslateHttpLoader();
	}

	export const appConfig: ApplicationConfig = {
  	providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: '/i18n/', //Répertoire ou lien vers vos fichiers de traductions.
        suffix: '.json'
      }
    },
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory
        }
      }),
      WordingLibraryModule.forRoot({
        baseUrl: '/i18n', //Répertoire ou lien vers vos fichiers de traductions.
        fileConfigVersion: 'versions' //Nom du fichier de config contenant les versions de vos langues.
      })
    )
  	]
	};


# Exemple d'utilisation dans un componsant 

app.component.html 

	<div class="language">
    	<select name="language" [value]="lastLang" #langSelect (change)="changeLang(langSelect.value)">
      	<option value="en">English</option>
      	<option value="fr">Français</option>
    	</select>
	</div>


	<div class="container">
    <div class="login-container">
        <h1> {{'LOGIN.TITLE' | translate : {name: dynamicName} }} </h1>
        <form class="form-login">
            <div class="input-group">
                <label for="username">{{'LOGIN.USERNAME' | translate}}</label>
                <input type="text" id="username" name="username" />
            </div>
            <div class="input-group">
                <label for="password">{{'LOGIN.PASSWORD' | translate}}</label>
                <input type="password" id="password" name="password" />
            </div>
        
          <button>{{'LOGIN.SUBMIT' | translate}}</button>
        </form>
    </div>
	</div>

	<router-outlet></router-outlet>

app.component.ts

	//Cette partie que pour angular 17+
	@Component({
	  selector: 'app-root',
	  imports: [RouterOutlet, TranslateModule],
	  templateUrl: './app.component.html',
	  styleUrl: './app.component.scss'
	})

	//Angular 15, 16, 17, 18, 19...
	export class AppComponent implements OnInit {

  	lastLang: string = "";
  	dynamicName = "John Doe";
	
  	constructor(private translate: TranslateService) {
  	}
  	ngOnInit(): void {
    const savedLang = sessionStorage.getItem('app_lang');
    const langToUse = savedLang ?? 'en';

    this.lastLang = langToUse;

    this.translate.setDefaultLang('en');
    this.translate.use(langToUse);

  	}
 

  	changeLang(lang: string) {
    this.translate.reloadLang(lang);
    this.translate.use(lang);

    this.lastLang = lang;
    sessionStorage.setItem('app_lang', lang); 
  	}
	}




