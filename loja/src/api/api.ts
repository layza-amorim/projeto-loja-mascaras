import axios from 'axios';
import { Comentario } from '../models/dto/Comentario';
import { Produto } from '../models/dto/Produto';

var api = axios.create({
  baseURL: 'http://192.168.1.73:3000/'
});

export async function listarProdutos(): Promise<Produto[]> {
  const response = await api.get('/produtos');
  return response.data;
}

export async function carregarProduto(id: number): Promise<Produto> {
  const response = await api.get('/produtos/' + id);
  return response.data;
}

export async function listarComentarios(id: number): Promise<Comentario[]> {
  const response = await api.get('/produtos/' + id + '/comentarios');
  return response.data;
}

export async function removerComentario(idProduto: number, id: number | string): Promise<void> {
  const response = await api.delete('/produtos/' + idProduto + '/comentarios/' + id);
  return response.data;
}

export async function cadastrarComentario(
  idProduto: number,
  nome: string,
  comentario: string,
  estrelas: number
): Promise<void> {
  const response = await api.post('/produtos/' + idProduto + '/comentarios', { nome, comentario, estrelas });
  return response.data;
}
