import { Outlet } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <h1>My Blog</h1>
    <Outlet />
  </div>
);
export default Navbar;
