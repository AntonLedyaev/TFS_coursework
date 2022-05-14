import {ref,set } from "firebase/database";
export const setData = (state,userName,db) => {
  return set(ref(db,'users/' + userName), {
    user: state.user.user.email,
    weight: state.weight.weight,
    goals: state.goals.goals,
    foodInfo: state.foodInfo.foodInfo
  });
}