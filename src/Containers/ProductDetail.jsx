// ProductDetail.jsx
import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../Redux/Actions/ProductActions";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    console.log(product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            dispatch(selectedProduct(response.data));
        } catch (err) {
            console.log("Err", err);
        }
    };

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail();
        }
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);

    return (
        <div className="container mx-auto px-4 py-12">
            {Object.keys(product).length === 0 ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
                </div>
            ) : (
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-10 flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
                            <img
                                className="max-h-96 object-contain transform transition-transform duration-500 hover:scale-105"
                                src={image}
                                alt={title}
                            />
                        </div>
                        <div className="md:w-1/2 p-10">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full uppercase tracking-wider">
                                    {category}
                                </span>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
                            <div className="flex items-center mb-6">
                                <span className="text-3xl font-bold text-indigo-600">${price.toFixed(2)}</span>
                                <span className="ml-4 text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                    In Stock
                                </span>
                            </div>
                            <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

                            <div className="flex space-x-4 mb-8">
                                <div className="flex items-center">
                                    <button className="text-gray-500 hover:text-indigo-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </button>
                                    <span className="ml-2 text-sm text-gray-500">Add to Wishlist</span>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    Add to Cart
                                </button>
                                <button className="w-full bg-white hover:bg-gray-50 text-indigo-600 font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center border-2 border-indigo-600 shadow-md hover:shadow-lg">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;