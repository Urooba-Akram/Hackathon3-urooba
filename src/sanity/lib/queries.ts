import { groq } from "next-sanity";


// Fetch all products with proper fields
export const allProducts = groq`
  *[_type == "products"]{
    _id,
    name,
    price,
    description,
    image, // Full image object
    category,
    discountPercent,
    new,
    colors,
    sizes
  }
`;

// Fetch the first four products (optional)
export const four = groq`
  *[_type == "products"][0..3]{
     _id,
    name,
    price,
    description,
    image, // Full image object
    category,
    discountPercent,
    new,
    colors,
    sizes
  }
`;