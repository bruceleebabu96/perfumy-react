import one from "../assets/image/one.jpg"
import two from "../assets/image/two.jpg"
import three from "../assets/image/three.jpg"

function Product() {
    return (<div className="products">
      <div className="box">
        <img src={one} alt=""/>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div className="box">
        <img src={two} alt="villain"/>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div className="box">
        <img src={three} alt="Designs Club"/>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>
    </div>)
  }

  export default Product