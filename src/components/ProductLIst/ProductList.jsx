import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
  {
    id: "1",
    title: "Джинсы",
    price: 5000,
    description: "Синего цвета, прямые",
  },
  {
    id: "2",
    title: "Куртка",
    price: 12000,
    description: "Красного цвета, осенняя",
  },
  {
    id: "3",
    title: "Джинсы 2",
    price: 6000,
    description: "Серого цвета, зауженные",
  },
  {
    id: "4",
    title: "Джинсы 3",
    price: 7000,
    description: "Красного цвета, широкие",
  },
];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { telegram, queryId } = useTelegram();

  // const onSendData = useCallback(() => {
  //   const data = {
  //     queryId,
  //     products: addedItems,
  //     total: getTotalPrice(addedItems),
  //   };

  //   fetch("http://localhost:8000", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  // }, []);

  // useEffect(() => {
  //   telegram.onEvent("mainButtonClicked", onSendData);
  //   return () => {
  //     telegram.offEvent("mainButtonClicked", onSendData);
  //   };
  // }, [onSendData]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      telegram.MainButton.hide();
    } else {
      telegram.MainButton.show();
      telegram.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className={"list"}>
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={"item"} />
      ))}
    </div>
  );
};

export default ProductList;
