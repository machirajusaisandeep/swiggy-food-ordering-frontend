import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthRedirectPage from "./pages/AuthRedirectPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import FaqPage from "./pages/FaqPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout children={<HomePage />} />} />
      <Route path="/faq" element={<Layout children={<FaqPage />} />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/profile"
          element={<Layout children={<UserProfilePage />} />}
        />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/manage-restaurant"
          element={<Layout children={<ManageRestaurantPage />} />}
        />
      </Route>
      <Route path="/auth-redirect" element={<AuthRedirectPage />} />
      <Route path="*" element={<span>Not Found</span>} />
    </Routes>
  );
};

export default AppRoutes;
