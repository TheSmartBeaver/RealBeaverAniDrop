import Image from "next/image"

const BestProducts = (props) => {
  var bestProducts = [
    { imgUrl: "/vercel.svg", description: "desc 1" },
    { imgUrl: "/logo.svg", description: "desc 2" },
  ]
  return (
    <div className="best-products">
      {bestProducts.map((product) => (
        <div>
          <Image
            src={product.imgUrl}
            alt="Vercel Logo"
            width={48}
            height={48}
          />
          <div>{product.description}</div>
        </div>
      ))}
    </div>
  )
}

export default BestProducts
