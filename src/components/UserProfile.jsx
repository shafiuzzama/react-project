import React from 'react'

const UserProfile = ({userdata}) => {
   const style= {textAlign:"center" ,backgroundColor:"#034694", color:"white" , fontSize: '18px',height:"100vh" }
  return (
    <div style={style}>
        
     <h1>{userdata.name}</h1>
    <img src={userdata.img} alt="" />
    <p>{userdata.title}</p>
    </div>
  )
}

export default UserProfile