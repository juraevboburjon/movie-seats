import Layout from "../components/Layout";
import BookingTable from "../components/BookingTable";

function Booking() {
  return (
    <Layout>
      <div className="flex justify-center">
        <BookingTable />
      </div>
    </Layout>
  );
}

export default Booking;
