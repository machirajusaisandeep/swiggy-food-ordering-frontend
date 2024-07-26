import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout children={<HomePage />} />} />
      <Route path="*" element={<span>Not Found</span>} />
    </Routes>
  );
};

export default AppRoutes;
