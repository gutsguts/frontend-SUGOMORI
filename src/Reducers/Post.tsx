import { REQUEST_FETCH, SUCCEEDED_FETCH, FAILED_FETCH } from '../actions';
import { requestFetch, succeededFetch, failedFetch } from '../actions';
import { postedTextData } from '../@types/postedTextData';
let postedTextData: postedTextData;

type Actions =
  | ReturnType<typeof requestFetch>
  | ReturnType<typeof succeededFetch>
  | ReturnType<typeof failedFetch>;

const initialState = {
  fetching: false,
  postText: [],
  error: null,
};

export interface FetchPostDataState {
  // postText: PostText[];
  payloadOBj: PayloadObj[];
}

export interface PayloadObj {
  data: string[];
}

interface PostState {
  fetching: boolean;
  postText: postedTextData[];
  error: Error | null;
}

export const fetchPostData = (state: PostState = initialState, action: Actions) => {
  switch (action.type) {
    case REQUEST_FETCH:
      return { ...state, fetching: true, error: null };
    case SUCCEEDED_FETCH:
      return { ...state, fetching: false, postText: action.payload.data };
    case FAILED_FETCH:
      return { ...state, fetching: false, postText: null, error: action.error };
    default:
      return state;
  }
};
