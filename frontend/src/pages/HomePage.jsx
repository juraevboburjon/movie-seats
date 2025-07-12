import BookingTable from "../components/BookingTable";
import EventBanner from "../components/EventBanner";
import Layout from "../components/Layout";
import MovieTable from "../components/MovieTable";

function HomePage() {
  return (
    <Layout>
      <EventBanner />
      <div className="flex justify-center">
        <div className="container">
          <div className="bg-gray-400/30 mt-5 py-3 rounded">
            <p className="text-center font-bold text-2xl text-white">
              여즘의 영화
            </p>
          </div>
        </div>
      </div>
      <MovieTable />
      <div className="flex justify-center">
        <BookingTable />
      </div>
    </Layout>
  );
}

export default HomePage;
