import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia("(max-width: 40rem)");
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${mobileMenu ? "active" : ""}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu ? "active" : ""
        }`}
      >
        <ul>
          <li>
            <NavLink to="" end>
              <MinhasFotos /> {mobile && "Minhas Fotos"}
            </NavLink>
          </li>
          <li>
            <NavLink to="estatisticas">
              <Estatisticas /> {mobile && "Estatísticas"}
            </NavLink>
          </li>
          <li>
            <NavLink to="postar">
              <Adicionar /> {mobile && "Adicionar Foto"}
            </NavLink>
          </li>
          <li>
            <button onClick={userLogout}>
              <Sair /> {mobile && "Sair"}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default UserHeaderNav;
