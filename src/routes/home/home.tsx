import { 
    Banner, 
    Layout, 
    ContentSection, 
    ContactSection,
    WartaSection
} from "@/components"


function Home() {
  return (
    <Layout>
      <Banner/>
      <ContentSection/>
      <WartaSection/>
      <ContactSection/>
    </Layout>
  )
}

export default Home;
