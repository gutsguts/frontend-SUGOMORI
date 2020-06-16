import * as React from 'react';
import { useEffect } from 'react';

interface ShowPostProps {
  text: string[];
  textForHomeTimeline: {
    postForHomeTimeline: { postText: postedTextData[] };
    key: postedTextData[];
  };
  postForHomeTimeline: string;
  requestFetch: () => void;
  requestDelete: (arg: number) => void;
  mapDispatchToProps: () => void;
}

interface postedTextData {
  text: string;
  id: number;
}

export const ShowPost = (props: ShowPostProps): void => {
  useEffect(() => {
    props.requestFetch();
    const postedTextDatas = props.textForHomeTimeline.postForHomeTimeline.postText;
    return () => {
      <div>
        {postedTextDatas.map((postedTextData: postedTextData) => {
          return (
            <div key={postedTextData.id}>
              {postedTextData.text}
              <span onClick={() => props.requestDelete(postedTextData.id)}>x</span>
            </div>
          );
        })}
      </div>;
    };
  });
};

// export const mapDispatchToProps = (dispatch) => ({
//   requestFetch: () => dispatch(requestFetch()),
//   requestDelete: (data: any) => dispatch(requestDelete(data)),
// });
// export const mapStateToProps = (state) => ({
//   postText: state,
// });
