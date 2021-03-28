import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Tema } from "../styles/styles";

interface Props {
  onPress: () => void;
  titulo: string;
}

export default function Button({ onPress, titulo }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: Tema.ROXO,
        padding: 10,
        width: "90%",
        borderRadius: 10,
      }}
      onPress={onPress}
    >
      <Text style={{ color: Tema.BRANCO, fontSize: 20, textAlign: "center" }}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}
