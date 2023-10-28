import React,{useState} from 'react'	
import '../App.css';


        // firebase content start------	


const Contact = () => {	

  const [user, setUser] = useState({	
    name: '',	
    email: '',	
    message: '',	
  });	

  let name,value;	
  const getUserData =(event) => {	

    name = event.target.name;	
    value = event.target.value;	


    setUser({...user, [name]: value});	
  };	

  const postData = async(e) =>{	
     e.preventDefault();	

     const {name,email,message,} = user;	


     if(name && email && message){	


      const res = await fetch("https://foodyapp-67a4d-default-rtdb.firebaseio.com/FoodApp.json", {	
        method: 'POST',	
        headers: {	
          "Content-Type": "application/json",	
        },	
        body: JSON.stringify({	
          name,	
          email ,	
          message ,	
        }),	
      }	

      );	


      // data clear after sending	


      if(res){	
        setUser({	
          name: '',	
          email: '',	
          message: '',	
        });	

        alert("Your response was successfully sent ");	
      }	


     }	

     else{	
          alert("Please! Fill in all the fields.");	
     }	
    };	

    // firebase content end------	






  return (	

  <section id='contact' className="mt-2">	
    <div id='contactpage' className='flex justify-around p-8 '>	

        <form className=" rounded-md text-blue-950 border-white border-2 p-5 bg-[#fff] shadow-xl">	
            <h2 className='mb-3 text-4xl font-black flex justify-center '>Contact Form</h2>	
            <input className='w-full mb-4 p-3 rounded-md border-[#ccc] border-2' type="text" value={user.name} onChange={getUserData} name='name' placeholder="Your Name" required/>	
            <input className='w-full mb-4 p-3 rounded-md border-[#ccc] border-2' type="email" value={user.email} onChange={getUserData} name='email' placeholder="Your Email" required/>	
            <textarea className='w-full mb-4 p-3 rounded-md border-[#ccc] border-2' value={user.message} onChange={getUserData} name='message' placeholder="Your Message" required></textarea>	
            
            <button onClick={postData} type="submit" className='w-full mb-4 p-3 rounded-md bg-yellow-400 text-black cursor-pointer hover:bg-yellow-500 font-semibold'>Submit</button>	
        </form> 	
        </div>	

    </section>	


  )	
}	

export default Contact;	
