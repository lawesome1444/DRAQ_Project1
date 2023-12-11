import logo from '../appLogo.png';  // Import the image
//Basic "legal" info, just meant to stay at the bottom as a footer.
function HomePage(){
    return(
        <div>
            <h1>Welcome to GotNoGames!</h1>
            <img src={logo}/>
            <h3>Please go to the store to see what games are available.</h3>
        </div>
    );
}
export default HomePage;