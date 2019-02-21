import { NestInterceptor, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export class WrapInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return call$.pipe(
      map(data => ({ success: true, payload: data })),
      catchError(error => {
        const exception = error
          ? error
          : new HttpException(
            'Something went wrong!',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        return throwError(exception);
      }),
    );
  }
}
