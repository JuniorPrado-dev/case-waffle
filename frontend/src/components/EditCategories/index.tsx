import React, { useEffect, useState } from "react";
import HorizontalMenu from "../HorizontalMenu";
import * as S from "./style";
import { updateCategoryList } from "@/services/categories";
import { useAppDispatch } from "@/redux/hooks";
import UpdateSubCategoryForm from "../UpdateSubCategoryForm ";
import UpdateCategoryForm from "../UpdateCategoryForm ";

interface AddProps {
  setIndex: (v: number) => void;
}
const EditCategories: React.FC<AddProps> = ({ setIndex }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    updateCategoryList(dispatch);
  }, []);

  const menuItems = [
    {
      label: "Editar categoria".toUpperCase(),
      content: <UpdateCategoryForm setIndex={setIndex} />,
    },
    {
      label: "Editar subcategoria".toUpperCase(),
      content: <UpdateSubCategoryForm setIndex={setIndex} />,
    },
  ];

  return (
    <S.Container>
      <HorizontalMenu
        items={menuItems}
        selectedItemIndex={selectedItemIndex}
        setSelectedItemIndex={setSelectedItemIndex}
      />
    </S.Container>
  );
};

export default EditCategories;
