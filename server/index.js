var express = require("express");
var cors = require("cors");
var { v4: uuidv4 } = require("uuid");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Servidor online");
});

const produtos = [
  {
    id: 1,
    nome: "MÁSCARA QUADRICULADA",
    preco: 7,
    descricao:
      "Máscara de excelente qualidade. Feita com tecido tricoline, 100% algodão e forro que não incomoda.",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/164362160_3975796729167622_590519317123989998_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=ttPC81mtQpsAX8oVfOf&_nc_ht=scontent.fnat1-1.fna&oh=52a219c62e51db75ed20590af5f5ac40&oe=60853C54",
    emEstoque: true,
  },
  {
    id: 2,
    nome: "MÁSCARA LISA 3D",
    preco: 7,
    descricao:
      "Máscara de tecido tricoline liso de excelente qualidade e 100% algodão.",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/166548858_3975796372500991_2273765630553139944_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=nYnURkxU1i4AX-3z_Ff&_nc_ht=scontent.fnat1-1.fna&oh=72ee0f96c3ea23fe6b55eeecf963b467&oe=6085A283",
    emEstoque: false,
  },
  {
    id: 3,
    nome: "MÁSCARA FLORIDA 3D",
    preco: 8,
    descricao:
      "Máscara de tecido tricoline florido de excelente qualidade e 100% algodão.",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/165790775_3975796492500979_633402970727117188_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=h5OZgJHZ_LQAX-9qEC7&_nc_ht=scontent.fnat1-1.fna&oh=e56a5fcc681c70f552441dceb0de693a&oe=6086FC9D",
    emEstoque: true,
  },
  {
    id: 4,
    nome: "MÁSCARA UNISEX 3D",
    preco: 8,
    descricao:
      "Máscara de tecido tricoline estampado de excelente qualidade e 100% algodão.",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/165482761_3975796402500988_3702748719056772477_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=eDTDYobAC_gAX_82bm6&_nc_ht=scontent.fnat1-1.fna&oh=d7a8c771142ea9f49c9611d06346c600&oe=6084FB6F",
    emEstoque: false,
  },
  {
    id: 5,
    nome: "MÁSCARA COLORIDA 3D",
    preco: 7,
    descricao:
      "Máscara de tecido tricoline estampado de dinossauros com excelente qualidade e 100% algodão.",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/163638225_3975796875834274_5369952538416111058_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=NIn7tBYGxUUAX-To40w&_nc_ht=scontent.fnat1-1.fna&oh=f4aea7908bc37ec9303a3d0c593ef3dd&oe=6084D879",
    emEstoque: true,
  },
  {
    id: 6,
    nome: "CONJUNTO TOUCA COLORIDA E MÁSCARA 3D LISA",
    preco: 20,
    descricao:
      "Máscara e touca de tecido tricoline de excelente qualidade e 100% algodão.",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/165666798_3975796799167615_8275963118525779040_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=7pnBOigdOJQAX-5XMr1&_nc_ht=scontent.fnat1-1.fna&oh=6815a16743d3f1d5cdccbe1aae8f804b&oe=6085B7A1",
    emEstoque: true,
  },
  {
    id: 7,
    nome: "CONJUNTO TOUCA LISA E MÁSCARA 3D LISA",
    preco: 20,
    descricao:
      "Máscara e touca de tecido tricoline de excelente qualidade e 100% algodão.",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/163598587_3975797022500926_1730612318291410830_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=7I7to2K5QvUAX_wWu8X&_nc_oc=AQnPJ2BfP3ebNFockyiBN7IvRE-oqysY9wnmaORATukvc0ZidQ1pohqairmUyuTbqig&_nc_ht=scontent.fnat1-1.fna&oh=6a56f43ece483c69aa28a3219636a4e4&oe=6087C4CF",
    emEstoque: false,
  },
];

var comentarios = [
  {
    id: 1,
    idProduto: 1,
    nome: "Cássia Guerra",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/105537129_3932121123471901_4003639806022113074_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=F0qzTwtKSAIAX9vlWnn&_nc_ht=scontent.fnat1-1.fna&oh=739bbc83c8a6cc4f8ebb1c467fbfc62f&oe=60862223",
    comentario:
      "Adorei a máscara! Tem uma ótima qualidade e um tecido fofinho de usar.",
    estrelas: 5,
  },
  {
    id: 2,
    idProduto: 1,
    nome: "Layza Samara",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/48362045_2068818429865471_1917189434323763200_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=shm4M50OWJUAX_7uvMd&_nc_ht=scontent.fnat1-1.fna&oh=085f235fe562411a13ec3291f9d2c42e&oe=60871479",
    comentario: "Máscara muito boa!",
    estrelas: 4,
  },
  {
    id: 3,
    idProduto: 2,
    nome: "Beltrando da Silva",
    imagem:
      "https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg",
    comentario:
      "Comprei 2 pros meus filhos. Eles não gostam de usar, mas são de boa qualidade.",
    estrelas: 4,
  },
  {
    id: 4,
    idProduto: 3,
    nome: "Fulano da Silva",
    imagem:
      "https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg",
    comentario: "Não gostei. Veio um tamanho menor do que eu esperava.",
    estrelas: 2,
  },
  {
    id: 5,
    idProduto: 3,
    nome: "Cássia Guerra",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/105537129_3932121123471901_4003639806022113074_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=F0qzTwtKSAIAX9vlWnn&_nc_ht=scontent.fnat1-1.fna&oh=739bbc83c8a6cc4f8ebb1c467fbfc62f&oe=60862223",
    comentario:
      "Adorei a máscara! Tem uma ótima qualidade e um tecido fofinho de usar.",
    estrelas: 5,
  },
  {
    id: 6,
    idProduto: 6,
    nome: "Layza Samara",
    imagem:
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/48362045_2068818429865471_1917189434323763200_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=shm4M50OWJUAX_7uvMd&_nc_ht=scontent.fnat1-1.fna&oh=085f235fe562411a13ec3291f9d2c42e&oe=60871479",
    comentario: "Conjunto excelente! Muito bom pra quem é da área da saúde",
    estrelas: 4,
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

app.delete("/produtos/:idProduto/comentarios/:id", (req, res) => {
  comentarios = comentarios.filter(
    (comentario) => comentario.id != req.params.id
  );
  res.status(200).end();
});

app.post("/produtos/:idProduto/comentarios", (req, res) => {
  const novoComentario = req.body;
  console.log(req.body);
  novoComentario.id = uuidv4();
  novoComentario.idProduto = req.params.idProduto;
  novoComentario.imagem =
    "https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg";
  comentarios.push(novoComentario);
  res.status(200).end();
});
