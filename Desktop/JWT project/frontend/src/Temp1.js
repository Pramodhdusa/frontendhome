import { useEffect } from "react";

function Temp1(){

  useEffect(()=>{

    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/auth/orders",{
  headers:{
    Authorization:"Bearer "+localStorage.getItem("token")
  }
})
.then(async res => {

  if(!res.ok){
    const text = await res.text();
    throw new Error(text);
  }

  return res.json();
})
.then(data => console.log(data))
.catch(err => console.error("API Error:", err));

  },[]);

  return <h1>Temp Page</h1>;
}

export default Temp1;