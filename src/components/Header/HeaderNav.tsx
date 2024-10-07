
import { Link } from "react-router-dom"
import styles from "./HeaderNav.module.css"
export const HeaderNav = () => {
  return (
    <div>
        <ul className={styles.ulNav}>
            <li><Link to="/Profile">Профиль</Link></li>
            <li><Link to="/SearchAuto">Найти автомобиль</Link></li>
            <li><Link to="/MyCars">Мои автомобили</Link></li>
            <li><Link to="/MyOrders">Мои заказы</Link></li>
            <li><Link to="/AboutUs">О нас</Link></li>
        </ul>
    </div>
  )
}
