import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function ProductDetails() {

    const { id } = useParams();

    const {
        data,
        loading,
        error
    } = useFetch(
        `https://dummyjson.com/products/${id}`
    );

    if (loading) {
        return <h2>Loading product...</h2>;
    }

    if (error) {
        return <h2>Something went wrong!</h2>;
    }

    return (
        <div className="p-6">

            <Link
                to="/products"
                className="inline-block mb-6 px-4 py-2 border rounded"
            >
                ← Back to Products
            </Link>

            <div className="max-w-2xl">

                <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="w-80"
                />

                <h1 className="text-3xl font-bold mt-4">
                    {data.title}
                </h1>

                <p className="mt-4 text-gray-600">
                    {data.description}
                </p>

                <p className="text-xl font-bold mt-4">
                    ₹{data.price}
                </p>

            </div>

        </div>
    );
}

export default ProductDetails;