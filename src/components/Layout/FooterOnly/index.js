import Footer from "~/components/Layout/Components/Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
