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
import SyncStorage from 'sync-storage'
import CreateCard from './src/create-card'
import CardList from './src/card-list'
import Navi from './src/navi'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: SyncStorage.get('cards') || []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleApp = this.handleApp.bind(this)
  }
  handleSubmit(card) {
    const cards = this.state.cards.slice()
    cards.push(card)
    this.setState({
      cards: cards
    })
  }
  componentDidMount() {
    AppState.addEventListener('change', this.handleApp)
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleApp)
  }
  handleApp(state) {
    const { cards } = this.state
    console.log(cards)
    if (state !== 'active' && cards.length > 1) {
      SyncStorage.set('cards', JSON.stringify(cards))
    }
  }
  render() {
    const { cards } = this.state
    return (
      <View style={styles.view}>
        <Container
          style={styles.container}
        >
          <Navi/>
          <Tabs>
            <Tab
              heading="Cards"
            >
              <CardList
                cards={cards}
              />
            </Tab>
            <Tab
              heading="New Card"
            >
              <CreateCard
                handleSubmit={this.handleSubmit}
              />
            </Tab>
          </Tabs>
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
