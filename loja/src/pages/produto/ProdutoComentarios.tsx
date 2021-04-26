import React, { useCallback, useState } from 'react';
import { Tema } from '../../styles/styles';
import { Container, Icon } from 'native-base';
import { ActivityIndicator, Alert, FlatList, Text, TouchableOpacity } from 'react-native';
import { listarComentarios, removerComentario } from '../../api/api';
import { moderateScale } from 'react-native-size-matters';
import { Comentario } from '../../models/dto/Comentario';
import { useProduto } from '../../providers/produtoProvider';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import { ProdutoPages } from '../Pages';
import SearchBar from '../../components/SearchBar';
import CardComentario from './CardComentario';

const ProdutoComentarios = () => {
  const navigation = useNavigation();
  const { produtoId } = useProduto();
  const [loading, setLoading] = useState(true);
  const [comentarios, setcomentarios] = useState<Comentario[]>([]);
  const [comentariosFiltrados, setcomentariosFiltrados] = useState<Comentario[]>([]);

  const adicionarButtonNovoComentario = () =>
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(ProdutoPages.CadastroComentario)}>
          <Icon type="MaterialIcons" name="add" style={{ color: Tema.BRANCO, fontSize: 30 }} />
        </TouchableOpacity>
      )
    });

  async function apagarComentario(id: string | number) {
    try {
      await removerComentario(produtoId, id);
      reload();
    } catch (erro) {
      console.log('Erro ao remover comentário: ', erro);
      Alert.alert('Erro ao remover comentário', 'Por favor, tente novamente alguns minutos.');
    }
  }

  async function reload() {
    try {
      setLoading(true);
      adicionarButtonNovoComentario();
      let comentarios = await listarComentarios(produtoId);
      setcomentarios(comentarios);
      setcomentariosFiltrados(comentarios);
      setLoading(false);
    } catch (erro) {
      setLoading(false);
      Alert.alert('Erro ao carregar os comentarios', 'Por favor, tente novamente em alguns minutos.');
      console.log('Erro ao carregar comentarios', erro);
    }
  }

  useFocusEffect(
    useCallback(() => {
      reload();
    }, [])
  );

  const buscarComentarios = (nome: string) => {
    if (nome) {
      setcomentariosFiltrados(comentarios.filter(comentario => comentario.comentario.includes(nome)));
    } else {
      setcomentariosFiltrados(comentarios);
    }
  };

  return (
    <Container style={{ backgroundColor: Tema.FUNDO_CINZA }}>
      <SearchBar
        onEndEditing={nome => {
          buscarComentarios(nome);
        }}
        placeholder="Buscar comentários"
      />
      {loading ? (
        <ActivityIndicator size="large" style={{ alignSelf: 'center', marginTop: 16 }} color={Tema.ROXO} />
      ) : (
        <FlatList
          data={comentariosFiltrados}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CardComentario comentario={item} onPresX={() => apagarComentario(item.id)} />}
          ListEmptyComponent={
            <Text style={{ fontSize: moderateScale(14, 0.5), textAlign: 'center' }}>Nenhum comentário encontrado</Text>
          }
        />
      )}
    </Container>
  );
};

export default ProdutoComentarios;
