import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

function Products() {

    const {
        data,
        loading,
        error
    } = useFetch("https://dummyjson.com/products");

    if (loading) {
        return <h2>Loading products...</h2>;
    }

    if (error) {
        return <h2>Something went wrong!</h2>;
    }

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Products
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {data.products.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </div>
    );
}

export default Products;