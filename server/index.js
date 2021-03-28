const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Servidor online");
});

const produtos = [
  {
    id: 1,
    nome: "MÁSCARA 3D COLORIDA",
    preco: 8,
    descricao:
      "Máscara de excelente qualidade. Feita com tecido tricoline, 100% algodão e forro que não incomoda.",
    imagem:
      "https://cdn.shopify.com/s/files/1/0019/1604/3327/products/mascara-3d-branca-pessoa_394x.png?v=1598569202",
    emEstoque: true,
  },
  {
    id: 2,
    nome: "MÁSCARA 3D LISA",
    preco: 7.99,
    descricao:
      "Máscara de tecido tricoline liso de excelente qualidade e 100% algodão.",
    imagem:
      "https://cdn.shopify.com/s/files/1/0019/1604/3327/products/mascara-3d-branca-pessoa_394x.png?v=1598569202",
    emEstoque: false,
  },
  {
    id: 3,
    nome: "CONJUNTO TOUCA E MÁSCARA LISA",
    preco: 19,
    descricao:
      "Máscara de tecido tricoline liso de excelente qualidade e 100% algodão.",
    imagem:
      "https://cdn.shopify.com/s/files/1/0019/1604/3327/products/mascara-3d-branca-pessoa_394x.png?v=1598569202",
    emEstoque: true,
  },
  {
    id: 4,
    nome: "CONJUNTO TOUCA E MÁSCARA 3D COLORIDA",
    preco: 20.0,
    descricao:
      "Máscara de tecido tricoline liso de excelente qualidade e 100% algodão.",
    imagem:
      "https://cdn.shopify.com/s/files/1/0019/1604/3327/products/mascara-3d-branca-pessoa_394x.png?v=1598569202",
    emEstoque: true,
  },
  {
    id: 5,
    nome: "CONJUNTO TIARA E MÁSCARA 3D COLORIDA",
    preco: 20.0,
    descricao:
      "Máscara e tiara de tecido tricoline de excelente qualidade e 100% algodão.",
    imagem:
      "https://cdn.shopify.com/s/files/1/0019/1604/3327/products/mascara-3d-branca-pessoa_394x.png?v=1598569202",
    emEstoque: true,
  },
];

const comentarios = [
  {
    id: 1,
    idProduto: 1,
    nome: "Fulana da Silva",
    imagem:
      "https://st2.depositphotos.com/3369547/11512/v/950/depositphotos_115129414-stock-illustration-woman-cartoon-icon-person-design.jpg",
    comentario:
      "Adorei a máscara! Tem uma ótima qualidade e um tecido fofinho de usar.",
    estrelas: 5,
  },
  {
    id: 2,
    idProduto: 2,
    nome: "Beltrando da Silva",
    imagem:
      "https://i.pinimg.com/736x/df/1d/6d/df1d6d87c95c3e39a3a0b0f4365eef9f.jpg",
    comentario:
      "Comprei 2 pros meus filhos. Eles não gostam de usar, mas são de boa qualidade.",
    estrelas: 4,
  },
  {
    id: 3,
    idProduto: 2,
    nome: "Fulano da Silva",
    imagem:
      "https://st2.depositphotos.com/3369547/11512/v/950/depositphotos_115129414-stock-illustration-woman-cartoon-icon-person-design.jpg",
    comentario: "Não gostei. Veio um tamanho menor do que eu esperava.",
    estrelas: 2,
  },
  {
    id: 4,
    idProduto: 2,
    nome: "Fulano da Silva",
    imagem:
      "https://st2.depositphotos.com/3369547/11512/v/950/depositphotos_115129414-stock-illustration-woman-cartoon-icon-person-design.jpg",
    comentario:
      "Adorei a máscara! Tem uma ótima qualidade e um tecido fofinho de usar.",
    estrelas: 5,
  },
];

app.get("/", function (req, res) {
  res.send("App de venda de máscaras");
});

app.get("/produtos", (req, res) => {
  res.send(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const produto = produtos.filter((produto) => produto.id == req.params.id);
  res.send(produto[0]);
});

app.get("/produtos/:id/comentarios", (req, res) => {
  res.send(
    comentarios.filter((comentario) => comentario.idProduto == req.params.id)
  );
});
