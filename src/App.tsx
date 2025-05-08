import React from "react";
import "./App.css";
import CourseCatalog from "./components/Day3/Day3";
import {
  MyCounter,
  UserInfo,
  withLoader,
  MyInput,
} from "./components/day4/Day4";

import { BatchedCounter } from "./Day5/day5";
import MovieReviews from "./Day5/MovieReviews";
import CheckoutPage from "./Day5/components-assignment/CheckoutPage";

// Using the HOC to wrap the UserInfo component
const UserInfoWithLoader = withLoader(UserInfo);

function App() {
  return (
    <div className="App">
      {/* <div className="HOC" style={{ border: "1px solid black" }}>
        <h2>HIgher Order Component Lesson</h2>
        <UserInfoWithLoader isLoading={true} name="Dino" greeting="Kamusta" />
        <UserInfoWithLoader isLoading={false} name="Dino" greeting="Kamusta" />
      </div>
      <div className="assignment2">
        <h2>Assignment 2 mapping arrays</h2>
        <CourseCatalog />
      </div>
      <div className="day4" style={{ border: "1px solid black" }}>
        <h2>Use State Lesson</h2>
        <MyCounter />
        <MyInput />
      </div>
      <div className="day5">
        <h2>Batched Counter</h2>
        <BatchedCounter />
        <h2>Movie Reviews Assginement</h2>
        <MovieReviews />
      </div> */}

      <CheckoutPage />
    </div>
  );
}

export default App;
