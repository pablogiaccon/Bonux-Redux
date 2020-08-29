import React, { useCallback } from "react";
import { IProduct } from "../store/modules/cart/types";
import { addProductToCart } from "../store/modules/cart/actios";
import { useDispatch } from "react-redux";

interface ICatalogItemStateProps {
  product: IProduct;
}
const CatalogItem: React.FC<ICatalogItemStateProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);
  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
