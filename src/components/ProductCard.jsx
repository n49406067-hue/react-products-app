import { Link } from "react-router-dom";

function ProductCard({ product }) {

    return (
        <div className="border rounded-lg p-4">

            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
            />

            <h2 className="text-lg font-semibold mt-3">
                {product.title}
            </h2>

            <p className="text-gray-600">
                ₹{product.price}
            </p>

            <Link
                to={`/products/${product.id}`}
                className="inline-block mt-3 px-4 py-2 bg-black text-white rounded"
            >
                View Details
            </Link>

        </div>
    );
}

export default ProductCard;