
export const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Error fetching products");
    }
    return response.json();
  };


  export const getFeatureProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    if (!response.ok) {
      throw new Error("Error fetching products");
    }
    return response.json();
  };