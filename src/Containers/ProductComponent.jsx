// ProductComponent.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;

        return (
            <div key={id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transform transition-all duration-300 hover:-translate-y-1">
                <Link to={`/product/${id}`} className="group">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 group-hover:border-indigo-100">
                        <div className="h-64 flex items-center justify-center p-6 bg-gray-50">
                            <img
                                src={image}
                                alt={title}
                                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">{title}</h3>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xl font-bold text-indigo-600">${price.toFixed(2)}</span>
                                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full uppercase tracking-wide">{category}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return <div className="flex flex-wrap -mx-4">{renderList}</div>;
};

export default ProductComponent;