import Header from "./components/Banner"
import ContactSection from "./components/Contact"
import ContentSection from "./components/Content"
import Layout from "./components/Layout"

function App() {
  return (
    <Layout>
      <Header/>
      <ContentSection/>
      <ContactSection/>
    </Layout>
  )
}

export default App
