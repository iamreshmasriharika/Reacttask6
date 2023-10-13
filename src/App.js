
import axios from 'axios';
import { useEffect, useState } from "react";


let url="http://localhost:3000"
function App() {
  let [comments,setComments]=useState([])
  async function getComments(){
    let result=await axios.get(`${url}/comments`)
    setComments(result.data)
  }

  async function postComment(data){
    let result=await axios.post(`${url}/comments`,data)
    getComments()
  }

  useEffect(()=>{
    getComments()
  },[])
  return (
    <>
      <header>Reshmas's Portfolio</header>
      <div class="para">
                <h1>Hello! I am Reshma</h1>
                <p class="desc">A passionate Self-taught Front-end Developer, I build modern-day UI components to improve application performance</p>
                <p class="d">I spend most of my time writing code for building User Interfaces. I like enjoying working in the intersection of design and development. I feel most productive when I'm able to design User Interfaces which not only look good but has a good performance as well.</p>
          <p class="d">"I believe that the design process must always consider how people use things in real life and lead to solutions that are clear, honest, and genuinely useful"</p>          
         
         <h1>skills</h1>
         <p>java</p>
         <p>python</p>
         <p>webdevelopment</p>
         <p>......................................................</p>
         <h1>Projects</h1>
         <p>java calculator</p>
         <p>temperature converter</p>
         <p>smart attendance</p>
         <p>......................................................</p>
         <h1>Certificates</h1>
         <p>java nptel</p>
         <p>sql hackerrank</p>
         <p>aws cloud</p>
            </div>   
            

   
    </>
  );
}

export default App;