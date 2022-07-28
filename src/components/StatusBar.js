import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/statusBar'

class StatusBar extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.text}> BAZZAAR </Text>

      	<TouchableOpacity>
      		<Text style={styles.pesquisaButton}> PESQUISAR </Text>
      	</TouchableOpacity>
      </View>
    );
  }
}

export default StatusBar;