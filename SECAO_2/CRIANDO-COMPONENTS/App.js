import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


class App extends Component {
  render() {

    let nome = 'Eduardo';

    return(
      <View>
        <Text>Olá Mundo!</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>Meu Primeiro App!</Text>

      <Jobs largura={500} altura={200} fulano='Jobs Steve' />

        <Text style={{ fontSize: 25 }}> {nome} </Text>

      </View>
    );
  }
}

class Jobs extends Component {
  render(){

    let img = 'http://sujeitoprogramador.com/steve.png';

    return(
      <View>
      <Image source={{ uri: img }}
      style={{ width: this.props.largura, height: this.props.altura }}  /> 

      <Text> {this.props.fulano} </Text>
      </View>
    );
  }
}

export default App;