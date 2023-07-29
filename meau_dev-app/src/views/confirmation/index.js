import React, { useEffect  } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles.style";
import { changeOwner, removeInterested } from "../../../services/animal";
import { showMessage } from 'react-native-flash-message';
import { getTokenById } from "../../../services/token";

const Confirmation = ({ route, navigation }) => {
    const { user } = route.params;
    const { animal } = route.params;

    const handleTransferAdoption = async () => {
        changeOwner(animal.animalId, user.uid);
        removeInterested(animal.animalId, user.uid);
        showMessage({
            message: `Adoção de ${animal.name}!`,
            description: 'Transferência realizada com sucesso!',
            type: 'success',
        });
        const tokenInterested = await getTokenById(user.uid)
        const message = {
            to: tokenInterested,
            sound: 'default',
            title: `Adoção de ${animal.name}`,
            body: `${(animal.name)} tem um nova solicitação de adoção`,
            data: {},
          };
        sendPushNotification(message)
        navigation.navigate("Meus Pets")
    };

    const handleNotAuthorizeAdoption = async () => {
        removeInterested(animal.animalId, user.uid);
        showMessage({
            message: 'Animal removido da lista de animais para adoção',
            description: 'Remoção sucedida!',
            type: 'info'
        });
        const message = {
            to: tokenInterested,
            sound: 'default',
            title: `Adoção de ${animal.name}`,
            body: `${user.name} negou seu pedido de adoção de ${(animal.name)}!`,
            data: {},
          };
        sendPushNotification(message)
        navigation.navigate("Meus Pets")
    };

    const handleGoChat = async () => {
        console.log("Go chat")
        navigation.navigate("Chat", {
            receiverId: user.uid,
        })
    };

    useEffect(() => {
        console.log("user", user)
        console.log("animal", route)
    });

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/confirmation.png')}
                style={styles.backgroundImage}
            />

            <View style={styles.circleContainer}>
                <Image
                    source={user.imageBase64}
                    style={styles.personImage}
                />
                <Image
                    source={animal.imageBase64}
                    style={styles.petImage}
                />
            </View>
            <View>
                <Text style={styles.text}>
                    Um novo amigo está interessado {"\n"}
                    em adotar o(a) {animal.name} {"\n"}
                    Confirma adoção?
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonConfirmation} onPress={() => handleTransferAdoption()}>
                <Text style={styles.buttonText} >Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDisapproval} onPress={() => handleNotAuthorizeAdoption()}>
                <Text style={styles.buttonText} >Não</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonChat} onPress={() => handleGoChat()}>
                <Text style={styles.buttonText} >Chat</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Confirmation;
