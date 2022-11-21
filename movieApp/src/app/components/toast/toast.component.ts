import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import ToastMsg from 'src/app/models/toastMessage.model'
import { ToastService } from 'src/app/services/toast.service'

@Component({
	selector: 'app-toast',
	templateUrl: './toast.component.html',
	styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
	$toastMessage!: Observable<ToastMsg>

	constructor(private _toast: ToastService) { }

	ngOnInit(): void {
		this.$toastMessage = this._toast.$toastMessage
	}
}
