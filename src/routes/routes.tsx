import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import GameDetailPage from "../pages/GameDetailPage";
import HomePage from "../pages/HomePage";
import LayOut from "../pages/LayOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
