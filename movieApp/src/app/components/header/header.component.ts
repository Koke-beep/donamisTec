import { Component, HostListener } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	scrollIsBottom = false

  @HostListener('window:scroll',['$event'])
	onScroll():void{

		if(this.window.scrollY >= 1){
			this.scrollIsBottom = true
		}
		else{
			this.scrollIsBottom = false
		}
	}

  constructor(private window: Window, private _router: Router) { }

  redirectHomePage(){
  	this._router.navigate(['/dashboard'])
  }
}
