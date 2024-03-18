
import axios from "axios"
import { useState } from "react"
 const useFecht = (url) => {
 const [response, setresponse] = useState()
 const [hasError,setHasError]=useState(false)

 const getApi=()=>{
    axios.get(url).then(res=>{
      setresponse(res.data)
      setHasError(false)

   }).catch(error=>{
      setHasError(true)
      console.log(hasError)
      console.log(error)
      
   })
 }
 return [response,getApi,hasError]
}
export default useFecht