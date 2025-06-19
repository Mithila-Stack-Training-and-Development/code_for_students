import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"
import axios from "axios"
import { useCounter } from "../provider/CounterProvider"



const ProductPage = () => {
  const {setCounter} = useCounter()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [refetch , setRefetch] = useState(false)

  console.log("data => ", data)

  useEffect(() => {
    fetchData();
  }, [refetch])

  useEffect(()=>{
    const interval = setInterval(() => {
      setCounter(prev => prev + 1)
    }, 2000);

    return ()=>{
      clearInterval(interval)
    }
  })



  async function fetchData() {
    try {
      setLoading(true)
      // const response = await fetch('https://dummyjson.com/products',{})
      // const josnData = await response.json();

      const response = await axios.get("https://dummyjson.com/products")
      const jsonData = response.data

      setData(jsonData.products)

    } catch (error) {
      console.log("error -> ", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading .....</div>
  }

  return (
    <Layout>
      <div className="mt-20">
        <button onClick={()=>setRefetch(!refetch)} className="text-white bg-red-500 p-2 rounded-md">Refresh</button>
      </div>

      <div className="min-h-screen pt-20 grid grid-cols-4">
        {
          data.map((item) => {
            return <ProductCard product={item} />
          })
        }
      </div>
    </Layout>
  )
}

export default ProductPage