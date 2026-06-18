import productsData from "./products.json";
import type { ProductCardProps } from "../types/product";

export const products = productsData as ProductCardProps[];

export const cameras = products.filter(
  (product) => product.category === "camera",
);

export const sensors = products.filter(
  (product) => product.category === "sensor",
);

export const accessories = products.filter(
  (product) => product.category === "accessory",
);

export const plans = products.filter(
  (product) => product.category === "plan",
);