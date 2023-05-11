import Header from "./Header";
import Footer from "~/components/Layout/Components/Footer";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import companyImg from "~/img/supercell_banner.webp";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>
          {children}
          <img className={cx("banner-img")} src={companyImg} alt="#"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
