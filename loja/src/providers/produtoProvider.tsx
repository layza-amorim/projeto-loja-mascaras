import React, { createContext, useContext, useState } from 'react';

interface ProdutoContextData {
  produtoId: number;
  atualizarProdutoId: (id: number) => void;
}

const ProdutoContextData = createContext<ProdutoContextData>({} as ProdutoContextData);

export const ProdutoProvider: React.FC = ({ children }: any) => {
  const [produtoId, setProdutoId] = useState<number>({} as number);

  const atualizarProdutoId = (id: number) => {
    return setProdutoId(id);
  };

  return (
    <ProdutoContextData.Provider value={{ produtoId, atualizarProdutoId }}>{children}</ProdutoContextData.Provider>
  );
};

export function useProduto(): ProdutoContextData {
  const context = useContext(ProdutoContextData);
  return context;
}
