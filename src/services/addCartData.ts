export interface Props {
  id: number;
  image: string;
  title: string;
  createdAt: string;
  description: string;
  price: string;
}

export const AddCart = ({
  id,
  image,
  title,
  createdAt,
  description,
  price,
}: Props) => {
  const itemData = {
    id,
    image,
    title,
    createdAt,
    description,
    price,
  };

  const currentItems = localStorage.getItem("purchasedItems");

  const updatedItems = currentItems ? JSON.parse(currentItems) : [];
  updatedItems.push(itemData);

  localStorage.setItem("purchasedItems", JSON.stringify(updatedItems));
  alert("Informações salvas no localStorage!");
};
