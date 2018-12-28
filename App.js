import React from 'react'
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  AppState
} from 'react-native'
import {
  StyleProvider,
  Container,
  Tabs,
  Tab,
  H3
} from 'native-base'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
import syncStorage from 'sync-storage'
import CardForm from './src/card-form'
import CardList from './src/card-list'
import Navi from './src/navi'
import CardPractice from './src/card-practice'

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
    this.updateIndex = this.updateIndex.bind(this)
  }
  findCard(selCard) {
    const { cards } = this.state
    const index = cards.findIndex(card => {
      return card.id === selCard.id
    })
    return index
  }
  updateIndex(passed, card) {
    const { cards } = this.state
    const index = this.findCard(card)
    const updatedCard = Object.assign({}, card)
    if (passed) {
      updatedCard.PFIndex++
    }
    else {
      updatedCard.PFIndex = 0
    }
    const preCards = cards.slice(0, index)
    const postCards = cards.slice(index + 1)
    const newCards = [...preCards, updatedCard, ...postCards]
    this.setState({
      cards: newCards
    })
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
        <Tabs
          tabBarPosition="overlayBottom"
        >
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
        <Tabs
          tabBarPosition="overlayBottom"
          locked
        >
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
          <Tab
            heading="Practice"
          >
            <H3
              style={styles.text}
            >
              Swipe right for pass and left for fail
            </H3>
            <CardPractice
              update={this.updateIndex}
              style={styles.container}
              cards={cards}
            />
            <H3
              style={styles.text}
            >
              Tap to flip card
            </H3>
          </Tab>
        </Tabs>
      )
    }
  }
  render() {
    return (
      <ScrollView
        contentContainerstyle={styles.view}
        keyboardShouldPersistTaps='handled'
      >
        <StyleProvider
          style={getTheme(material)}
        >
          <Container
            style={styles.container}
          >
            <Navi/>
            {
              this.renderTabs()
            }
          </Container>
        </StyleProvider>
      </ScrollView>
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
    width: '100%',
    height: Dimensions.get('window').height
  },
  text: {
    marginVertical: 16,
    alignSelf: 'center'
  }
})
