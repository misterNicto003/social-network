import { useState } from 'react'

import { Burger } from './Burger'
import styles from "./Header.module.css"
import { HeaderNav } from './HeaderNav'
export const Header = () => {
    const [burger,setBurger] = useState(true)
    const burgerClick = () => {
        setBurger(!burger)
    }
  return (
    <div className={styles.Header}>
        <div>CarRent</div>
        <div>
        <Burger burgerClick={burgerClick}/>
        <div className={burger ? styles.headerNav : styles.headerNavActive}>
        {burger ? false : <HeaderNav/>}
        </div>
        </div>
    </div>
  )
}
