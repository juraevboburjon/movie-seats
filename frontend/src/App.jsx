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
import Register from "./pages/Register";
import CreateMovie from "./pages/CreateMovie";
import AdminAuth from "./service/AdminAuth";
import NotFound from "./pages/NotFound";
import MoviePage from "./pages/MoviePage";
import CreateSession from "./pages/CreateSession";
import OneSession from "./pages/Session";
import SelectSeat from "./pages/SelectSeat";
import Payment from "./pages/Payment";
import Ticket from "./pages/Ticket";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<Events />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/booking/:id" element={<OneSession />} />
        <Route path="/booking/:sessionId/seats" element={<SelectSeat />} />
        <Route path="/ticket/:ticketId/" element={<Ticket />} />
        <Route
          path="/booking/:sessionId/:seatNumber/payment"
          element={<Payment />}
        />

        <Route path="*" element={<NotFound />} />
        <Route
          path="/createmovie"
          element={
            <AdminAuth>
              <CreateMovie />
            </AdminAuth>
          }
        />
        <Route
          path="/createsession"
          element={
            <AdminAuth>
              <CreateSession />
            </AdminAuth>
          }
        />
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
