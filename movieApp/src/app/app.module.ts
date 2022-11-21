import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NotFoundComponent } from './views/not-found/not-found.component'
import { DashboardMoviesComponent } from './views/dashboard-movies/dashboard-movies.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { MovieCardComponent } from './views/movie-card/movie-card.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ApikeyInterceptor } from './services/interceptors/apikey.interceptor'
import { ToastComponent } from './components/toast/toast.component'

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
		DashboardMoviesComponent,
		HeaderComponent,
		FooterComponent,
		MovieCardComponent,
		ToastComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FontAwesomeModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ApikeyInterceptor, multi: true},
		{ provide: Window, useValue: window},
		{ provide: Document, useValue: document},
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
