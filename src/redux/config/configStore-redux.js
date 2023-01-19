// 일반 리덕스 combineReducers 예시 코드

import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

//두 가지 메서드 이용

//여러개의 모듈 루트 리듀서로 합친다
const rootReducer = combineReducers({
  counter,
});

//합친 리듀서에 store를 생성한다
const store = createStore(rootReducer);
export default store;
