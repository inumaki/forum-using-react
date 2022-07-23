
import React from "react";

function App() {
 const [backdata,setbackdata]= React.useState([{}])
React.useEffect(()=>{
fetch("/home").then(response=>response.json())
.then(data=>{

  setbackdata(data)
})


},[])

console.log(backdata)
  return (
  
<div>Yo welcome to react</div>
  )
}

export default App;
