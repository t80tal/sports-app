import { ProductInputsType, UserInputsType } from "./types/types";

export const userInputs: UserInputsType[] = [
  {
    id: 1,
    label: "Username",
    type: "text",
    placeholder: "username1",
  },
  {
    id: 2,
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: 3,
    label: "Password",
    type: "password",
  },
  {
    id: 4,
    label: "Full name",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 5,
    label: "Email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 7,
    label: "Country",
    type: "text",
    placeholder: "USA",
  },
];

export const productInputs: ProductInputsType[] = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];
