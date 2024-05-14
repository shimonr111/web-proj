import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import GetData from "./pages/GetData";
import EditData from "./pages/EditData";
import AddData from "./pages/AddData";
import RemoveData from "./pages/RemoveData";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetData />} />
          <Route path="edit" element={<EditData />} />
          <Route path="add" element={<AddData />} />
          <Route path="delete" element={<RemoveData />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
