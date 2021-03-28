import React from "react";
import { Container, Icon, Tab, TabHeading, Tabs, Text } from "native-base";
import { Tema } from "../../styles/styles";
import { useNavigation } from "@react-navigation/core";
import ProdutoDetalhe from "./ProdutoDetalhe";
import Comentarios from "./ProdutoComentarios";

const Produto = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Tabs
        tabBarPosition="bottom"
        tabBarUnderlineStyle={{ borderWidth: 3, borderColor: Tema.ROXO }}
        onChangeTab={({ i }: any) =>
          navigation.setOptions({title: i === 0 ? "INFORMAÇÕES" : "COMENTÁRIOS"})}>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: Tema.BRANCO , flexDirection: "column"}}>
              <Icon type="FontAwesome" name="file-text" style={{ color: Tema.ROXO, fontSize: 21 }}/>
              <Text style={{ color: Tema.ROXO }}>Informações</Text>
            </TabHeading>
          }>
          <ProdutoDetalhe />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: Tema.BRANCO , flexDirection: "column"}}>
              <Icon type="FontAwesome" name="commenting" style={{ color: Tema.ROXO, fontSize: 22 }}/>
              <Text style={{ color: Tema.ROXO }}>Comentários</Text>
            </TabHeading>
          }>
          <Comentarios />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Produto;
