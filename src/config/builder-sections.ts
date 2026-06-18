import {
  cameras,
  sensors,
  accessories,
  plans,
} from "../data/products";

export const builderSections = [
  {
    step: 1,
    title: "Choose your cameras",
    products: cameras,
    cols: "xl:grid-cols-5",
  },
  {
    step: 2,
    title: "Choose your plan",
    products: plans,
    cols: "xl:grid-cols-3",
  },
  {
    step: 3,
    title: "Choose your sensors",
    products: sensors,
    cols: "xl:grid-cols-2",
  },
  {
    step: 4,
    title: "Add extra protection",
    products: accessories,
    cols: "xl:grid-cols-2",
  },
];