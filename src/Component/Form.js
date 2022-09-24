import React,{ useState } from 'react';


function Form() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[usn,setUsn]=useState('');
    const[contact,setContact]=useState('');
    const handleSubmit=(e)=>{
      console.preventDefault();
      const data={
        name:name,
        email:email,
        usn:usn,
        contact:contact
      }
      console.log(data);
    };


  return (
    <div>
      <form onSubmit={(handleSubmit)}>
        <input type="text" 
        value={name} 
        placeholder="Student name" onChange={(e)=> setName(e.target.value)}/><br></br>

         <input type="text" 
        value={email} 
        placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/><br></br>
        
        <input type="text" 
        value={usn} 
        placeholder="Usn" onChange={(e)=> setUsn(e.target.value)}/><br></br>
        
        <input type="text" 
        value={contact} 
        placeholder="Contact" onChange={(e)=> setContact(e.target.value)}/><br></br>
      
        
          <input type="Button" value="submit"/>
          
          
        
        
        
      </form>
    </div>
  );
}

export default Form;