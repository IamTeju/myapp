import React from 'react'

function Welcome(Props){
    return(
        <div>
            <h1> Welcome {Props.name}</h1>
            <h1> Email id {Props.name}</h1>
        </div>
    );
}

function Props(){
    return(
        <div>
            <Welcome name="Teju"/>
            <Welcome email="ntejaswini308@gmail.com"/>
        </div>
    );
}
export default Props;
  
