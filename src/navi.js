import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Left,
  Right,
  Header,
  H2,
  Body
} from 'native-base'

export default class Navi extends React.Component {

  render() {
    return (
      <Header
        style={styles.navi}
      >
        <Left>
          <H2
            style={styles.text}
          >
          Flash-Cards
          </H2>
        </Left>
        <Body>
        </Body>
        <Right>
        </Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  navi: {
    width: '100%'
  },
  text: {
    color: '#fff'
  }
})
