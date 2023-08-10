import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}>
          <Link to="/" style={styles.navbarLink}>
            Home
          </Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/add" style={styles.navbarLink}>
            ADD
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: {
    backgroundColor: "#f5f5f5",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
  },
  navbarList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  navbarItem: {
    marginLeft: "10px",
  },
  navbarLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    padding: "5px",
  },
};
