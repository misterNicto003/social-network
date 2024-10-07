import React from 'react'
import styles from "./Burger.module.css"
export const Burger = ({burgerClick}) => {
  return (
    <div onClick={() => {
        burgerClick()
    }} className={styles.Burger}></div>
  )
}
