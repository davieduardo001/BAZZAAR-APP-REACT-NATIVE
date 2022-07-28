import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView 
} from 'react-native';

import StatusBar from './src/components/StatusBar'
import Produtos from './src/components/Produtos'

class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#9b9c9a', flex: 1}}>
        <StatusBar/>

        <ScrollView>
          <Produtos nomeDoProduto={'BLUSA PRETA'} precoDoProduto={'87.65'} imagem={require('./src/imgs/img1.jpg')} />
          <Produtos nomeDoProduto={'CONJUNTO NATURA'} precoDoProduto={'76,99'} imagem={require('./src/imgs/img2.jpg')} />
          <Produtos nomeDoProduto={'BLUSA FLORIDA'} precoDoProduto={'43,43'} imagem={require('./src/imgs/img3.jpg')} />
        </ScrollView>
      </View>
    );
  }
}


export default App;