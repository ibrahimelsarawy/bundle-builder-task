type ProductCategory = "camera" | "sensor" | "accessory" | "plan";

export type Color = {
  name: string;
  image: string;
};

export type ProductCardProps = {
  id: number;
  category: ProductCategory;
  title: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  discountPercentage?: number;
  colors?: Color[];
  learnMoreUrl?: string;
  isSelectable?: boolean;
};
