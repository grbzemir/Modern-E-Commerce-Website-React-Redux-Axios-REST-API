// ProductList.jsx
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from '../Redux/Actions/ProductActions';
import ProductComponent from "./ProductComponent";

const ProductList = () => {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            if (response.data) {
                dispatch(setProducts(response.data));
            }
        } catch (err) {
            console.log("Error fetching products:", err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover amazing products at unbeatable prices. Quality you can trust.
                </p>
            </div>
            <ProductComponent />
        </div>
    );
};

export default ProductList;