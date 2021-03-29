import React, { useEffect, useState } from 'react';
import { Tema } from '../../styles/styles';
import { Container } from 'native-base';
import { ActivityIndicator, Alert, FlatList, Text } from 'react-native';
import { listarComentarios } from '../../api/api';
import { moderateScale } from 'react-native-size-matters';
import { Comentario } from '../../models/dto/Comentario';
import { useProdutoId } from '../../providers/produtoProvider';
import SearchBar from '../../components/SearchBar';
import CardComentario from './CardComentario';

const ProdutoComentarios = () => {
  const { produtoId } = useProdutoId();
  const [loading, setLoading] = useState(false);
  const [comentarios, setcomentarios] = useState<Comentario[]>([]);
  const [comentariosFiltrados, setcomentariosFiltrados] = useState<Comentario[]>([]);

  useEffect(() => {
    setLoading(true);
    listarComentarios(produtoId)
      .then(comentarios => {
        setLoading(false);
        setcomentarios(comentarios);
        setcomentariosFiltrados(comentarios);
      })
      .catch(erro => {
        setLoading(false);
        Alert.alert('Erro ao carregar os comentarios', 'Por favor, tente novamente em alguns minutos.');
        console.log('Erro ao carregar comentarios', erro);
      });
  }, []);

  const buscarComentarios = (nome: string) => {
    if (nome) {
      setcomentariosFiltrados(comentarios.filter(comentario => comentario.comentario.includes(nome)));
    } else {
      setcomentariosFiltrados(comentarios);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ alignSelf: 'center', marginTop: 16 }} color={Tema.ROXO} />;
  }

  return (
    <Container style={{ backgroundColor: Tema.FUNDO_CINZA }}>
      <SearchBar
        onEndEditing={nome => {
          buscarComentarios(nome);
        }}
        placeholder="Buscar comentários"
      />
      <FlatList
        data={comentariosFiltrados}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CardComentario comentario={item} />}
        ListEmptyComponent={
          <Text style={{ fontSize: moderateScale(14, 0.5), textAlign: 'center' }}>Nenhum comentário encontrado</Text>
        }
      />
    </Container>
  );
};

export default ProdutoComentarios;
