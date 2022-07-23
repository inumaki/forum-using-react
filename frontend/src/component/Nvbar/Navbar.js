import React from "react"
import './Navbar.css'
export default function Navbar()
{
    let currentuser="aryan"
return (
<div class="navmainbody">
<div class="homeandtitle">    
<p class="forum">Forum</p>
<a class="home" href="/home">Home</a>
<a class="home" href="/mylist">My lists</a>
</div>
<div class="regandlogin">
  
{
 currentuser.length>0?  
    <>
<a class="register" href="http://localhost:4000/register">Sign Up</a>
<a class="login"   href="http://localhost:4000/login">Login</a>
</>

:
    <>
<div class="avatar avatar-xsm avatar-text avatar-text-xsm" >{currentuser[0]}</div>
<div class="miniwindow">
    <p>{currentuser}</p>
    <hr/>
    <ul class="ulist">
    <li><a class="ulista" href="/home">Home</a></li>
    <hr/>
    <li><a class="ulista" href="/logout">Logout</a></li>
    </ul>
    </div>
    </>
}



</div>

</div>
)

}