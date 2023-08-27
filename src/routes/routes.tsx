import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "../pages/GameDetailPage";
import HomePage from "../pages/HomePage";
import LayOut from "../pages/LayOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
