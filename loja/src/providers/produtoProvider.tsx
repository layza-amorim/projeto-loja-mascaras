import React, { createContext, useContext, useState } from 'react';
import { Comentario } from '../models/dto/Comentario';
import { Produto } from '../models/dto/Produto';

interface ProdutoContextData {
  produtoId: number;
  atualizarProdutoId: (id: number) => void;
  //produtos: Produto[];
  //comentarios: Comentario[];
  //atualizarProdutos: (produtos: Produto[]) => void;
  //atualizarComentarios: (comentarios: Comentario[]) => void;
}

const ProdutoContextData = createContext<ProdutoContextData>({} as ProdutoContextData);

export const ProdutoProvider: React.FC = ({ children }: any) => {
  const [produtoId, setProdutoId] = useState<number>({} as number);
  //const [produtos, setProdutos] = useState<Produto[]>([])
  //const [comentarios, setComentarios] = useState<Comentario[]>([])

  const atualizarProdutoId = (id: number) => {
    return setProdutoId(id);
  };

  // const atualizarProdutos = (produtos: Produto[]) => {
  //   return setProdutos(produtos);
  // };

  // const atualizarComentarios = (comentarios: Comentario[]) => {
  //   return setComentarios(comentarios);
  // };

  return (
    <ProdutoContextData.Provider value={{ produtoId, atualizarProdutoId }}>{children}</ProdutoContextData.Provider>
  );
};

export function useProduto(): ProdutoContextData {
  const context = useContext(ProdutoContextData);
  return context;
}
