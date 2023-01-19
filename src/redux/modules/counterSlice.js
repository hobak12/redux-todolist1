// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

//액션 객체를 dispatch하면서, 비동기 처리를 해주는 Thunk 함수
export const _addNumber = createAsyncThunk(
  //첫번째 인자: action value
  "addNumber",
  //두번째 인자 : 콜백함수
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
    }, 3000);
  }
);

//createSlice라는 toolkit의 api 사용
const counterSlice = createSlice({
  name: "counter", //리듀서 이름 - 인자
  initialState, //초기값 - 인자
  reducers: {
    //리듀서 로직 + 액션 상수 +액션 크리에이터 - 인자
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
