import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import Booking from "./pages/Booking";
import Movies from "./pages/Movies";
import Login from "./pages/Login";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<Events />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/login" element={<Login />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
