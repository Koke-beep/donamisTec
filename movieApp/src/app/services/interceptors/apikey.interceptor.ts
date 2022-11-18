import { Injectable } from '@angular/core'
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

	constructor() {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const cloneRequest = request.clone({
			params: request.params.set('api_key','c6aeee577586ba38e487b74dfede5deb')
		})
		return next.handle(cloneRequest)
	}
}
