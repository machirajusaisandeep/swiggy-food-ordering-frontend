import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthRedirectPage from "./pages/AuthRedirectPage";
import UserProfilePage from "./pages/UserProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout children={<HomePage />} />} />
      <Route
        path="/profile"
        element={<Layout children={<UserProfilePage />} />}
      />
      <Route path="/auth-redirect" element={<AuthRedirectPage />} />
      <Route path="*" element={<span>Not Found</span>} />
    </Routes>
  );
};

export default AppRoutes;
