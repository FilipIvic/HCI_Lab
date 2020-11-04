import React from "react"
 
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import PageContent from "../modules/PageContent"
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    {/* Body components here! */}
    <TitlePage />
    <PageContent />
    <PageContent />
  </HeaderFooterLayout>
)
 
export default IndexPage

