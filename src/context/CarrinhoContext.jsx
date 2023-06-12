import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {v4} from "uuid"

export const CarrinhoContext = createContext()

export function CarrinhoContextProvider({ children }) {

  const [produtos, setProdutos] = useState([])
  
  function addProduto(produto) {
    const newProdutos = produtos

    const data = [...newProdutos, {
      id: v4(),
      ...produto
    }]

    setProdutos(data)
    localStorage.setItem("@pi-vini", JSON.stringify(data))
  }

  function removeProduto(id) {
    const data = produtos.filter(produto => produto.id !== id)

    setProdutos(data)
    localStorage.setItem("@pi-vini", JSON.stringify(data))
  }

  useEffect(() => {
    const response = localStorage.getItem("@pi-vini")

    const responseData = JSON.parse(response)

    setProdutos(responseData ?? [])
  }, [])

  return (
    <CarrinhoContext.Provider
      value={{ produtos, addProduto, removeProduto }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinho(){
  const context = useContext(CarrinhoContext)

  return context
}