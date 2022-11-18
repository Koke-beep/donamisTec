import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NotFoundComponent } from './views/not-found/not-found.component'
import { DashboardMoviesComponent } from './views/dashboard-movies/dashboard-movies.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { MovieCardComponent } from './components/movie-card/movie-card.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ApikeyInterceptor } from './services/interceptors/apikey.interceptor'

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
		DashboardMoviesComponent,
		HeaderComponent,
		FooterComponent,
		MovieCardComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FontAwesomeModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ApikeyInterceptor, multi: true}
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
