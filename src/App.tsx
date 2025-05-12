import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import TermsPage from "./pages/Terms";
import PrivacyPolicyPage from "./pages/Privacy";
import LogoBlackBar from "./sections/LogoBlackBar";
import Footer from "./sections/Footer";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <ScrollRestoration />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/terms",
          element: (
            <>
              <LogoBlackBar />
              <TermsPage />
              <Footer />
            </>
          ),
        },
        {
          path: "/privacy",
          element: (
            <>
              <LogoBlackBar />
              <PrivacyPolicyPage />
              <Footer />
            </>
          ),
        },
        {
          path: "*",
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
