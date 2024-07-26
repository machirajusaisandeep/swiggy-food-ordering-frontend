import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout children={<h1>Home</h1>} />} />
      <Route path="*" element={<span>Not Found</span>} />
    </Routes>
  );
};

export default AppRoutes;
