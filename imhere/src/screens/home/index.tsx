import { View,Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/participant";

export default function Home() {
    const participants = ["Alan", "João", "Maria", "José", "Pedro", "Lucas", "Ana", "Paula", "Carlos", "Mariana"];

    function handleParticipantAdd(){
        if(participants.includes("Alan")){
            return Alert.alert("Erro", "Participante já cadastrado");
        }

        console.log("Adicionar participante");
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover participante", `Deseja remover o participante ${name}?`, [
            {
                text: "Cancelar",
                style: "cancel"
            },
            {
                text: "Remover",
                style: "destructive",
                onPress: () => removeParticipant(name)
            }
        ]);

        console.log("Remover participante");
    }

    function removeParticipant(name: string){
        console.log("Remover participante", name);

        Alert.alert("Sucesso", `Participante ${name} removido com sucesso`);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023.</Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nome do Participante"
                    placeholderTextColor="#6b6b6b"    
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>Nenhum participante cadastrado</Text>
                )}
            />

            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {participants.map((participant, index) => (
                    <Participant key={index} name={participant} onRemove={() => handleParticipantRemove(participant)} />
                ))}
            </ScrollView> */}

            

            {/* <Participant name="Alan 0" onRemove={() => handleParticipantRemove("Alan 01")} /> */}
        </View>
    )
}