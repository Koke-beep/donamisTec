import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardMoviesComponent } from './views/dashboard-movies/dashboard-movies.component'

const routes: Routes = [
	{ path: '', redirectTo: 'movies', pathMatch: 'full' },
	{ path: 'movies', component: DashboardMoviesComponent}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
