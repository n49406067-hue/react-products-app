import {Routes,Route,Navigate} from "react-router-dom";
import Navbar from"./components/Navbar";

import Products from"./pages/Products";
import ProductDetails from"./pages/ProductDetails";

function App(){
    return (
        <>

        <Navbar />

        <Routes>

            <Route 
            path="/"
            element={<Navigate to="/products "/>}
            />

            <Route
            path="/products"
            element={<Products />}
            />

            <Route 
            path="/products/:id"
            element={<ProductDetails/>}
            />

        </Routes>
        </>
    );
}

export default App;
