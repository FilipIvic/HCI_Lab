import React from "react"
import ContactBar from '../components/contactBar'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'

const IndexPage = () => (
  <main>
    <ContactBar />
    <NavigationHeader activeTab = "Contact"/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>This is were we will add content</p>
    <Footer />
  </main>
)

export default IndexPage