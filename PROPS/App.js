import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


class App extends Component {
  render() {

    let nome = 'Eduardo';
    let img = 'http://sujeitoprogramador.com/steve.png';

    return(
      <View>
        <Text>Olá Mundo!</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>Meu Primeiro App!</Text>

        <Image source={{ uri: img }} 
        style={{ width: 300, height: 300 }}>

        </Image>

        <Text style={{ fontSize: 25 }}> {nome} </Text>

      </View>
    )
  }
}

export default App;