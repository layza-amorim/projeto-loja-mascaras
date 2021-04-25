import React, { useEffect, useState } from 'react';
import { Tema } from '../../styles/styles';
import { Container, Icon, Textarea } from 'native-base';
import { ActivityIndicator, Alert, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useProduto } from '../../providers/produtoProvider';
import { useNavigation } from '@react-navigation/core';
import { Rating } from 'react-native-ratings';
import { TouchableOpacity } from 'react-native';
import { cadastrarComentario } from '../../api/api';
import { ProdutoPages } from '../Pages';

const CadastroComentario = () => {
  const navigation = useNavigation();
  const { produtoId } = useProduto();
  const [loading, setLoading] = useState(false);
  const [estrelas, setEstrelas] = useState(0);
  const [nome, setNome] = useState<string>('');
  const [comentario, setComentario] = useState<string>('');

  const adicionarButtonEnviarComentario = () =>
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.7} onPress={adicionarComentario}>
          <Icon type="Entypo" name="check" style={{ color: Tema.BRANCO, fontSize: 25 }} />
        </TouchableOpacity>
      )
    });

  useEffect(() => {
    adicionarButtonEnviarComentario();
  }, [estrelas, nome, comentario]);

  const adicionarComentario = () => {
    if (nome.length > 0 && comentario.length > 0 && estrelas > 0) {
      setLoading(true);
      cadastrarComentario(produtoId, nome, comentario, estrelas)
        .then(value => {
          setLoading(false);
          navigation.navigate(ProdutoPages.ProdutoComentarios);
        })
        .catch(erro => {
          setLoading(false);
          setNome('');
          setComentario('');
          setEstrelas(0);
          Alert.alert('Erro ao adicionar comentário', 'Por favor, tente novamente em alguns minutos.');
          console.log('Erro ao adioncar comentário: ', erro);
        });
    } else {
      Alert.alert('Por favor, preencha todos os campos');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ alignSelf: 'center', marginTop: 16 }} color={Tema.ROXO} />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={styles.container}>
        <TextInput
          placeholder="Digite seu nome"
          placeholderTextColor={Tema.CINZA_ESCURO_TEXTO}
          style={styles.input}
          onChangeText={setNome}
        />
        <Textarea
          style={styles.textarea}
          rowSpan={8}
          bordered
          onChangeText={setComentario}
          placeholder="Digite seu comentário"
          placeholderTextColor={Tema.CINZA_ESCURO_TEXTO}
        />
        <Rating startingValue={0} onFinishRating={setEstrelas} />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default CadastroComentario;

const styles = StyleSheet.create({
  container: { backgroundColor: Tema.FUNDO_CINZA, padding: 20 },
  title: { fontSize: 18, color: Tema.CINZA_ESCURO_HEADER, marginBottom: 20 },
  textarea: { marginVertical: 20, padding: 10 },
  input: {
    borderBottomWidth: 1,
    borderColor: Tema.CINZA_ESCURO_HEADER,
    color: Tema.VERDE_CLARO1,
    fontSize: 18,
    margin: 50,

    textAlign: 'center'
  }
});
