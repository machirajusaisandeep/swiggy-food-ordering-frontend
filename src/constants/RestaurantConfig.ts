import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "Placed", value: "placed", progressValue: 0 },
  {
    label: "Awaiting Restaurant Confirmation",
    value: "paid",
    progressValue: 25,
  },
  { label: "In Progress", value: "inProgress", progressValue: 50 },
  { label: "Out for Delivery", value: "outForDelivery", progressValue: 75 },
  { label: "Delivered", value: "delivered", progressValue: 100 },
];

export const cuisineList: string[] = [
  "American",
  "BBQ",
  "Breakfast",
  "Burgers",
  "Cafe",
  "Chinese",
  "Desserts",
  "French",
  "Greek",
  "Healthy",
  "Indian",
  "Italian",
  "Japanese",
  "Mexican",
  "Noodles",
  "Organic",
  "Pasta",
  "Pizza",
  "Salads",
  "Seafood",
  "Spanish",
  "Steak",
  "Sushi",
  "Tacos",
  "Tapas",
  "Vegan",
];
