import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MovieCardComponent } from './views/movie-card/movie-card.component'
import { DashboardMoviesComponent } from './views/dashboard-movies/dashboard-movies.component'
import { NotFoundComponent } from './views/not-found/not-found.component'

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardMoviesComponent },
	{ path: 'detail/:id', component: MovieCardComponent },
	{ path: '**', component: NotFoundComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
