import { Injectable } from '@angular/core'
import ToastMsg from '../models/toastMessage.model'
import { BehaviorSubject, Observable} from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
	providedIn: 'root'
})
export class ToastService {
	private _toast = new BehaviorSubject<ToastMsg | null>(null)
	$toastMessage!: Observable<ToastMsg>

	constructor() {
		this.$toastMessage = this._toast.pipe(
			map((message) => {
				this.timerForCloseToast()
				return  message as ToastMsg
			}),
		)
	}

	setMessageData(message: ToastMsg){
		this._toast.next({...message})
	}

	timerForCloseToast(){
		if(this._toast.value !== null){
			setTimeout(()=> {
				this._toast.next(null)
			}, 5000)
		}
	}
}
