import React from "react"
 
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    {/* Body components here! */}
    <TitlePage />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>This is were we will add content</p>
  </HeaderFooterLayout>
)
 
export default IndexPage

