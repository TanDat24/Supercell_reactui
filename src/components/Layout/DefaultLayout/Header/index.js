import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import companyImg from "~/img/supercell_logo1.webp";
import icon_c from "~/img/supercell_creators_grey.f699541d.svg";
import icon_m from "~/img/supercell_make_grey.964b2d8d.svg";
import icon_id from "~/img/supercell_id_grey.62affa0b.svg";
import icon_search from "~/img/search_icon.534f25e1.webp";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img className={cx("logo-img")} src={companyImg} alt="#"></img>
        </div>
        <nav className={cx("navbar-header")}>
          <div className={cx("menu")}>
            <div className={cx("nav-bar-menu")}>
              Games
              <div className={cx("menu-items")}>
                <div className={cx("menu-nav")}>
                  <div className={cx("menu-games-nav")}>Hay Day</div>
                  <div className={cx("menu-games-nav")}>Clash of Clans</div>
                  <div className={cx("menu-games-nav")}>Boom Beach</div>
                  <div className={cx("menu-games-nav")}>Clash Royale</div>
                  <div className={cx("menu-games-nav")}>Brawl Stars</div>
                </div>
              </div>
            </div>

            <div className={cx("nav-bar-menu")}>
              Careers
              <div className={cx("menu-items")}>
                <div className={cx("menu-nav")}>
                  <div className={cx("menu-games-nav")}>
                    Why You Might Love It Here
                  </div>
                  <div className={cx("menu-games-nav")}>Our Offices</div>
                  <div className={cx("menu-games-nav")}>Joining Supercell</div>
                  <div className={cx("menu-games-nav")}>Living in Helsinki</div>
                  <div className={cx("menu-games-nav")}>Living in Shanghai</div>
                  <div className={cx("menu-games-nav")}>Open Positions</div>
                  <div className={cx("menu-games-nav")}>Career Stories</div>
                </div>
              </div>
            </div>
            <div className={cx("nav-bar-menu")}>
              Support
              <div className={cx("menu-items")}>
                <div className={cx("menu-nav")}>
                  <div className={cx("menu-games-nav")}>
                    Be Safe & Play Fair
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("nav-bar-menu")}>
              About Us
              <div className={cx("menu-items")}>
                <div className={cx("menu-nav")}>
                  <div className={cx("menu-games-nav")}>News</div>
                  <div className={cx("menu-games-nav")}>Investments</div>
                  <div className={cx("menu-games-nav")}>Level Up</div>
                  <div className={cx("menu-games-nav")}>Ilkka's Long Texts</div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("icon-and-serach")}>
            <from className={cx("search-from")}></from>
            <div className={cx("icon-list")}>
              <img className={cx("menu-icon")} src={icon_c} alt="#"></img>
              <img className={cx("menu-icon")} src={icon_m} alt="#"></img>
              <img className={cx("menu-icon")} src={icon_id} alt="#"></img>
            </div>
            <div className={cx("search-icon")}>
              <img className={cx("menu-icon")} src={icon_search} alt="#"></img>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
