"use client";

import Image, { StaticImageData } from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import cartImg from "@/assets/images/cart-img-1.png";

type Product = {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  image: StaticImageData;
  quantity: number;
};

function ProductsCart() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Blue Flower Print Crop Top",
      color: "Yellow",
      size: "M",
      price: 1000,
      image: cartImg,
      quantity: 1,
    },
    {
      id: "2",
      name: "Levender Hoodie",
      color: "Levender",
      size: "XXL",
      price: 2050,
      image: cartImg,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: string, increment: boolean) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          const newQuantity = increment
            ? product.quantity + 1
            : Math.max(1, product.quantity - 1);
          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className=" mx-auto p-4">
      <div className="w-full overflow-x-auto container">
        <table className="w-full min-w-[58.4375rem] table ">
          <thead>
            <tr className="container">
              <th>PRODUCT DETAILS</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SHIPPING</th>
              <th>SUBTOTAL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="container">
                <td className="py-4 px-3">
                  <div className="flex items-center gap-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={105}
                      height={120}
                      className="rounded-xl object-cover"
                    />
                    <div className="flex flex-col gap-2.5">
                      <h3 className="font-medium text-lg leading-[1.3613rem] text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-sm leading-[1.0588rem] text-secondary">
                        Color : {product.color}
                      </p>
                      <p className="text-sm leading-[1.0588rem] text-secondary">
                        Size : {product.size}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-3">
                  <span className="text-lg leading-[1.3613rem] text-secondary">
                    Rs.{product.price}
                  </span>
                </td>
                <td className="py-4 px-3">
                  <div className="flex items-center gap-2 bg-accent-background text-rainmaker rounded-xl w-fit py-2.5 px-[1.375rem]">
                    <button onClick={() => updateQuantity(product.id, false)}>
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{product.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, true)}>
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </td>
                <td className="py-4 px-3">
                  <span className="text-lg leading-[1.3613rem] text-secondary">
                    FREE
                  </span>
                </td>
                <td className="py-4 px-3">
                  <span className="text-lg leading-[1.3613rem] text-secondary">
                    Rs.{product.price * product.quantity}
                  </span>
                </td>
                <td className="py-4 px-3">
                  <button onClick={() => removeProduct(product.id)}>
                    <Trash2
                      size={28}
                      className="text-primary hover:opacity-70"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsCart;
