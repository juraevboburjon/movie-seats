import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col justify-center">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
