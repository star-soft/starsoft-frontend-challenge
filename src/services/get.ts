import { Dispatch, SetStateAction } from "react";
import axios from "axios";

interface getProps {
  getRoute: string;
  setList: Dispatch<SetStateAction<never[]>>;
}

export const Get = async ({ getRoute, setList }: getProps) => {
  try {
    const response = await axios.get(getRoute);
    setList(response.data);
  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
  }
};
