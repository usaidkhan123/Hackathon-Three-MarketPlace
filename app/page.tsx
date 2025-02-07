import ProductsListing from "./products/page"
import Header from "@/app/components/homepage/header"
import Hero from "./components/homepage/hero"
import Hero3 from "./components/homepage/hero3"
import Featureds from "./components/homepage/featured"
import Footer from "./components/homepage/footer"
import LatestProduct from "./latestproduct/page"
const LandingPage = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <ProductsListing></ProductsListing>
      <LatestProduct></LatestProduct>
      <Hero3></Hero3>
      <Featureds></Featureds>
      <Footer></Footer>
    </div>
  )
}
export default LandingPage