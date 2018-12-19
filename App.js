import React from 'react'
import {
  StyleSheet,
  AppState,
  View
} from 'react-native'
import {
  Container,
  Tabs,
  Tab
} from 'native-base'
import syncStorage from 'sync-storage'
import CardForm from './src/card-form'
import CardList from './src/card-list'
import Navi from './src/navi'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCard: null,
      cards: syncStorage.get('cards')
        ? JSON.parse(syncStorage.get('cards'))
        : [],
      currentId: syncStorage.get('currentId')
        ? JSON.parse(syncStorage.get('currentId'))
        : 1
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleApp = this.handleApp.bind(this)
    this.editCard = this.editCard.bind(this)
    this.renderTabs = this.renderTabs.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.findCard = this.findCard.bind(this)
  }
  findCard(selCard) {
    const { cards } = this.state
    const index = cards.findIndex(card => {
      return card.id === selCard.id
    })
    return index
  }
  handleSubmit(card) {
    const { cards, currentId } = this.state
    let newCards = null
    if (card.id && cards.length > 1) {
      const index = this.findCard(card)
      const preCards = cards.slice(0, index)
      const postCards = cards.slice(index + 1)
      newCards = [...preCards, card, ...postCards]
    }
    else if (card.id && cards.length === 1) {
      newCards = [card]
    }
    else {
      newCards = cards.slice()
      card.id = currentId
      newCards.push(card)
    }
    this.setState({
      cards: newCards,
      currentId: currentId + 1,
      selectedCard: null
    })
  }
  deleteCard(card) {
    const { cards } = this.state
    const index = this.findCard(card)
    if (cards.length === 1) {
      this.setState({
        cards: []
      })
    }
    else {
      const preCards = cards.slice(0, index)
      const postCards = cards.slice(index + 1)
      const newCards = [...preCards, ...postCards]
      this.setState({
        cards: newCards
      })
    }
  }
  componentDidMount() {
    AppState.addEventListener('change', this.handleApp)
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleApp)
  }
  handleApp(state) {
    const { cards, currentId } = this.state
    if (state !== 'active' && cards.length >= 1) {
      syncStorage.set('cards', JSON.stringify(cards))
      syncStorage.set('currentId'.JSON.stringify(currentId))
    }
  }
  editCard(card) {
    this.setState({
      selectedCard: card
    })
  }
  renderTabs() {
    const { cards, selectedCard } = this.state
    if (selectedCard) {
      return (
        <Tabs>
          <Tab
            heading="Edit Card"
          >
            <CardForm
              card={this.state.selectedCard}
              handleSubmit={this.handleSubmit}
            />
          </Tab>
        </Tabs>
      )
    }
    else {
      return (
        <Tabs>
          <Tab
            heading="Cards"
          >
            <CardList
              deleteCard={this.deleteCard}
              editCard={this.editCard}
              cards={cards}
            />
          </Tab>
          <Tab
            heading="New Card"
          >
            <CardForm
              card={selectedCard}
              handleSubmit={this.handleSubmit}
            />
          </Tab>
        </Tabs>
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
          {
            this.renderTabs()
          }
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
