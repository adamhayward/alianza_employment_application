import React from "react";
import { Route, Routes } from "react-router-dom";

import PersonalInfo from "./components/pages/personal_info";

import PageLayout from "./components/layouts/layout";

export default function App() {

  fetch("https://api.monday.com/v2", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.REACT_APP_MONDAY_API_KEY,
      "API-Version": "2023-04",
    },
    body: JSON.stringify({
      query: "query{boards (limit:5) {id name} }",
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(JSON.stringify(res, null, 2)));

  let query = "query {boards (ids: 4766802308) { columns { id title type }}}";

  fetch("https://api.monday.com/v2", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.REACT_APP_MONDAY_API_KEY,
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(JSON.stringify(res, null, 2)));
  return (
    <PageLayout>
      <Routes basename="/">
        <Route path="/" element={<PersonalInfo/>} />
      </Routes>
    </PageLayout>
  );
}
