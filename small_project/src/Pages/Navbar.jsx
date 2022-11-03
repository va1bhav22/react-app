import React from 'react'
import { Link } from 'react-router-dom'
import  styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.nav}>
        <Link  className={styles.Link}  to={"/"}>Home</Link>
        <Link  className={styles.Link}  to={"/disc"}></Link>
        <Link  className={styles.Link}  to={"/cart"}>Cart</Link>
    </div>
  )
}

export default Navbar