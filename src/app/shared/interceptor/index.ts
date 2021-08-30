//will register all interceptors.

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

export const interceptors: any[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useclass: TokenInterceptor,
    multi: true,
  },
  {},
];
