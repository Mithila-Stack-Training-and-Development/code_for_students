import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col gap-3 h-[300px] shadow-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain rounded-lg"
      />

      <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>

      <div className="flex items-center justify-between">
        <span className="text-indigo-600 font-bold text-lg">
          ₹{(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
        </span>
        <span className="text-sm line-through text-gray-400">
          ₹{product.price.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        <Star size={16} className="fill-yellow-400 stroke-yellow-400" />
        <span className="text-gray-700">{product.rating.toFixed(1)}</span>
      </div>

      <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded flex items-center justify-center gap-2 text-sm transition">
        <ShoppingCart size={16} /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
