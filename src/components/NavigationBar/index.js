import React from 'react'

import styles from './style.module.css'
import { navs as navTabs } from '../../constants/const'                 //korištenje 'as'

//const navTabs = ['Home', 'Accommodation', 'Photo Gallery', 'Contact']

const NavigationBar = (props) => (                                      //umjesto props mozemo koristit ({ activeTab, useThisStyle })
    <nav className={styles[props.useThisStyle || 'navigationBar']}>
      {navTabs.map(tab => {
      if (tab === props.a)                                              //* activeTab je deklariran u /pages/index.js 
        return (                                                        // a je deklariran u Navigation
          <li className={styles.active}>{tab}</li>)
      else
        return <li>{tab}</li>
      }
    )}
    </nav>
  )

export default NavigationBar

/*
------------------------------------------------------------------------------------------------------------------
#hard-codirana komponenta

      <li className={styles.active}>Home</li>
      <li>Accommodation</li>
      <li>Photo gallery</li>
      <li>Contact</li>
------------------------------------------------------------------------------------------------------------------
#nema styla active

      {navTabs.map(
        tab => <li>{tab}</li>
      )}
------------------------------------------------------------------------------------------------------------------
#može se trenutno zapisat i ovako:

      const NavigationBar = () => (
        <nav className={styles.navigationBar}>
          {navTabs.map(tab => <li className={tab==='Home' ? styles.active : ''}> {tab} </li>)}
        </nav>
      )

#iza strijelica se vraca odijeljak (unutar kojeg se nalaze html tagovi, a ako zelimo vratiti i kod
onda stavljamo {array.map( el => )}) 

      unutar maps funkcije, ako imamo:
      1) jednu liniju mozemo pisat normalno;
         el => <li>{tab}</li>

      2) više linija 
        el => {
          if (tab === 'Home')
            return (<li className={styles.active}> {tab} </li>)
          else
            return <li> {tab} </li>
        }
  ------------------------------------------------------------------------------------------------------------------
  #kad koristimo props ne trebaju nam zagrade, a ako koristimo dekonstrukciju
  objekta onda koristimo zagrade (te unutar njih koristimo {što oznacava dekonstrukciju objekta})

        const NavigationBar = ({activeTab}) => (
          <nav className={styles.navigationBar}>
            {navTabs.map(tab => <li className={tab === activeTab ? styles.active : ''}> {tab} </li>)}
          </nav>
        )

        //#endregion
*/