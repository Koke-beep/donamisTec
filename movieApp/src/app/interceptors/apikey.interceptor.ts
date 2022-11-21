import { Injectable } from '@angular/core'
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import ToastMsg from 'src/app/models/toastMessage.model'
import { ToastService } from '../services/toast.service'

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {
	private apiKey = 'c6aeee577586ba38e487b74dfede5deb'
	constructor(private _toast: ToastService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const cloneRequest = request.clone({
			params: request.params.set('api_key', this.apiKey)
		})
		return next.handle(cloneRequest).pipe(
			map(res =>  res),
			catchError(error => {
				const toastMsg: ToastMsg = {
					status: error.status,
					message: error.error.status_message
				}
				this._toast.setMessageData(toastMsg)
				return throwError(error)
			})
		)
	}
}
