import './creation.css';
import './R.jpg'
function Creation (){
    return(
   <html>
    <head>
        <link rel="stylesheet" href="creation.css"></link>
<title>Hope Center</title>
    </head>
    <body>
        <header id="home">
            <nav>
                <a href="#home"> <image src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" alt= "LOGO"></image></a>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#Donate">Donate</a>
                            <a href="#Inventory">Inventory</a>

                        </li>
                    </ul>

                </div>
            </nav>
        </header>
        <div className="container">
            <h1>POPUP LOGIN</h1>
            <a href="#h" className="button">
                Login

            </a>
        </div>
        <div className="popup">
            <div className="popup-content">
            <img src="https://th.bing.com/th/id/R.76b592030b9e0e5474ca4c8b0078ef74?rik=0M1QQFyAkBWArw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_267727.png&ehk=DC8fHzwl1jYpg0xYsQJCbyMM%2fDpGkVJwvNzGog3ZPJc%3d&risl=&pid=ImgRaw&r=0" alt="close" class="close"/>
           <img className="image" src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" alt="User"></img>
           <input type="text" placeholder="Alert"></input>
           <input type="text" placeholder="Reason"></input>
           <a href="#3" class="button">Submit</a> 

            </div>

        </div>
<script>

</script>
        
    </body>
   </html>

    )
}
export default Creation