import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import backgroundImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}>     
      <Image 
        source={backgroundImg} 
        style={styles.image} 
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'} 
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'} 
          favoritos com seus amigos
        </Text>

        {
          loading ? <ActivityIndicator color={theme.colors.primary} /> :
          <ButtonIcon 
              title="Entrar com Discord"
              onPress={handleSignIn}
          />  
        }                             
      </View>
    </View>
  )
}