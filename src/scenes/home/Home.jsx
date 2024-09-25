import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList.jsx";


const Home = () =>{
    return(
        <div className="home">
            <MainCarousel />
            <ShoppingList />
        </div>
    )
    
}

export default Home;