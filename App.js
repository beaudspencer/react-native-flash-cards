import React from 'react'
import { StyleSheet, View } from 'react-native'
import CreateCard from './src/create-card'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(card) {
    const cards = this.state.cards.slice()
    cards.push(card)
    this.setState({
      cards
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <CreateCard
          handleSubmit={this.handleSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
