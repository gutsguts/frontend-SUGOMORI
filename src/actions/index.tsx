import { PayloadObj } from '../Reducers/Post';
import { postedTextData } from '../@types/postedTextData';

export const REQUEST_FETCH = 'REQUEST_FETCH';
export const SUCCEEDED_FETCH = 'SUCCEEDED_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';

export const REQUEST_DELETE = 'REQUEST_DELETE';
export const SUCCEEDED_DELETE = 'SUCCEEDED_DELETE';
export const FAILED_DELETE = 'FAILED_DELETE';

export const REQUEST_CREATE = 'REQUEST_CREATE';
export const SUCCEEDED_CREATE = 'SUCCEEDED_CREATE';
export const FAILED_CREATE = 'FAILED_CREATE';

export const requestFetch = () => ({ type: REQUEST_FETCH } as const);
// export const succeededFetch = (payload: PayloadObj, data: string[]) =>
// ({ type: SUCCEEDED_FETCH, payload, data } as const);
export const succeededFetch = (payload: PayloadObj) =>
  ({ type: SUCCEEDED_FETCH, payload } as const);

export const failedFetch = (message: string) =>
  ({ type: FAILED_FETCH, message, error: Error } as const);

export const requestDelete = (data: string[]) => ({ type: REQUEST_DELETE, data } as const);
export const succeededDelete = (payload: PayloadObj) =>
  ({ type: SUCCEEDED_DELETE, payload } as const);
export const failedDelete = (message: string) => ({ type: FAILED_DELETE, message } as const);

export const requestCreate = (postText: postedTextData[]) => ({ type: REQUEST_CREATE, postText });
export const succeededCreate = (payload: PayloadObj) => ({ type: SUCCEEDED_CREATE, payload });
export const failedCreate = (message: string) => ({ type: FAILED_CREATE, message });
