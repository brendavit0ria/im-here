import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>2 de Outubro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Brenda Vitória" />
      <Participant name="Maria Vitória" />
      <Participant name="Larissa Emily" />
      <Participant name="Otavio Gabriel" />
    </View>
  );
}