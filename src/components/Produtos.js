import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/produtos'

class StatusBar extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      descricaoAtivada: 0, //100
      borderRadiusOfImageWhenactivated: 10 //0
    };
  }

  ativarDescricao(){
    if (this.state.descricaoAtivada == 0) {
      this.setState({ 
                      descricaoAtivada: 100, 
                      borderRadiusOfImageWhenactivated: 0 })
    } else if (this.state.descricaoAtivada == 100) {
      this.setState({ 
                      descricaoAtivada: 0,
                      borderRadiusOfImageWhenactivated: 10 })
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.areaTocavel} onPress={() => this.ativarDescricao()}>
            <Image
              style={{
                width: '100%',
                height: 350,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: this.state.borderRadiusOfImageWhenactivated,
                borderBottomRightRadius: this.state.borderRadiusOfImageWhenactivated
              }}

              source={this.props.imagem}
            />
          </TouchableOpacity>

          <View style={{
            backgroundColor: '#FFFFFF',
            height: this.state.descricaoAtivada,
            justifyContent: 'center',
            alignItems: 'center'}}>

            <Text style={styles.text}>{this.props.nomeDoProduto}</Text>
            <Text style={styles.text}>{this.props.precoDoProduto}</Text>

            <TouchableOpacity>
              <Text style={styles.comprarButton}> COMPRAR </Text>
            </TouchableOpacity>
          </View>
        </View>
      	
    );
  }
}

export default StatusBar;