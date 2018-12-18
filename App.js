import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Content,
  Container
} from 'native-base'
import CreateCard from './src/create-card'
import CardList from './src/card-list'
import Navi from './src/navi'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'list',
      cards: [
        {
          ans: 'hi',
          ques: 'bye'
        }
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderView = this.renderView.bind(this)
  }
  handleSubmit(card) {
    const cards = this.state.cards.slice()
    cards.push(card)
    this.setState({
      cards: cards
    })
  }
  renderView() {
    const { view, cards } = this.state
    if (view === 'create') {
      return (
        <CreateCard
          handleSubmit={this.handleSubmit}
        />
      )
    }
    else if (view === 'list') {
      return (
        <CardList
          cards={cards}
        />
      )
    }
  }
  render() {
    return (
      <View style={styles.view}>
        <Container
          style={styles.container}
        >
          <Navi/>
          <Content>
            {this.renderView()}
          </Content>
        </Container>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: '100%'
  }
})
