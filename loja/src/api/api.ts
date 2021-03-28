import axios from "axios";
import { Comentario } from "../models/dto/Comentario";
import { Produto } from "../models/dto/Produto";

var api = axios.create({
  baseURL: "http://192.168.1.73:3000",
});

export async function listarProdutos(): Promise<Produto[]> {
  const response = await api.get("/produtos");
  return response.data;
}

export async function carregarProduto(id: number): Promise<Produto> {
  const response = await api.get("/produtos/" + id);
  return response.data;
}

export async function listarComentarios(id: number): Promise<Comentario[]> {
  const response = await api.get("/produtos/" + id + "/comentarios");
  return response.data;
}
