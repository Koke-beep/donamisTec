import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'

import { FooterComponent } from './footer.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('FooterComponent', () => {
	let component: FooterComponent
	let fixture: ComponentFixture<FooterComponent>
	const routerSpy = jasmine.createSpyObj('Router', ['navigate'])

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ FooterComponent ],
			providers: [
				{ provide: Router, useValue: routerSpy}
			]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(FooterComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
	it('should navigate to /dashboard on call redirectHomePage', ()=> {
		component.redirectHomePage()
		const navArgs = routerSpy.navigate.calls.first().args[0]

		expect(navArgs).toEqual(['/dashboard'])
	})

})
