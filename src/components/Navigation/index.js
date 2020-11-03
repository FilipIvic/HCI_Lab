import React from 'react'
import styles from './style.module.css'

import NavigationBar from '../NavigationBar'
import Combobox from '../Combobox'

const Navigation = ({activeTab}) => (
  <section>
    <NavigationBar a = {activeTab}/>
    <Combobox />
  </section>
)

export default Navigation