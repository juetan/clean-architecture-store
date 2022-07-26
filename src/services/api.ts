import { Product } from "../domain/product";

export const api_payment = (): Promise<boolean> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(Math.random() > 0.5), 500)
  );
};

export const api_get_products = (): Product[] => {
  return [
    {
      id: 1,
      name: "测试A",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=1",
      ingredient: ["甜"],
      price: 32,
    },
    {
      id: 2,
      name: "测试B",
      description: "上火喝凉茶",
      image: "https://picsum.photos/300/200?key=2",
      ingredient: ["甜"],
      price: 15,
    },
    {
      id: 3,
      name: "测试C",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=3",
      ingredient: ["甜"],
      price: 48,
    },
    {
      id: 4,
      name: "测试D",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=4",
      ingredient: ["甜"],
      price: 18.8,
    },
    {
      id: 5,
      name: "测试E",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=5",
      ingredient: ["甜"],
      price: 24.8,
    },
    {
      id: 6,
      name: "测试F",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=6",
      ingredient: ["甜"],
      price: 13.2,
    },
    {
      id: 7,
      name: "测试G",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=7",
      ingredient: ["甜"],
      price: 17.8,
    },
    {
      id: 8,
      name: "测试H",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=8",
      ingredient: ["甜"],
      price: 19.8,
    },
    {
      id: 9,
      name: "测试I",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=9",
      ingredient: ["甜"],
      price: 25,
    },
    {
      id: 10,
      name: "测试J",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=10",
      ingredient: ["甜"],
      price: 7,
    },
    {
      id: 11,
      name: "测试K",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=9",
      ingredient: ["甜"],
      price: 25,
    },
    {
      id: 12,
      name: "测试L",
      description: "入口即化，纵享丝滑",
      image: "https://picsum.photos/300/200?key=10",
      ingredient: ["甜"],
      price: 7,
    },
  ];
};
