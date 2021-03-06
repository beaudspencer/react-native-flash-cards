import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  Container,
  Content,
  H3,
  DeckSwiper
} from 'native-base'
import PracticeCard from './practice-card'
import ProgressBar from './progress-bar'

export default class CardPractice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: false,
      progress: (1 / this.props.cards.length) * 100
    }
    this.flip = this.flip.bind(this)
    this.calcPercent = this.calcPercent.bind(this)
  }
  flip() {
    this.setState({
      answer: !this.state.answer
    })
  }
  calcPercent(card) {
    const { cards } = this.props
    const length = cards.length
    const index = cards.findIndex(element => element.id === card.id)
    const percent = ((index + 1) / length) * 100
    this.setState({
      progress: percent
    })
  }
  render() {
    const { cards, update } = this.props
    return (
      <View
        style={styles.view}
      >
        {
          cards.length >= 1
            ? (
              <React.Fragment>
                <DeckSwiper
                  dataSource={cards}
                  renderItem={item => {
                    return (
                      <PracticeCard
                        flip={this.flip}
                        answer={this.state.answer}
                        card={item}
                      />
                    )
                  }}
                  onSwipeLeft={(card) => {
                    update(false, card)
                    this.setState({
                      answer: false
                    })
                    this.calcPercent(card)
                  }}
                  onSwipeRight={(card) => {
                    update(true, card)
                    this.setState({
                      answer: false
                    })
                    this.calcPercent(card)
                  }}
                />
                <ProgressBar
                  style={styles.progress}
                  progress={this.state.progress}
                />
              </React.Fragment>
            )
            : (
              <Container
                style={styles.container}
              >
                <Content>
                  <H3
                    style={styles.center}
                  >
                  No cards to practice!
                  </H3>
                </Content>
              </Container>
            )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 120,
    marginBottom: 194,
    height: 240
  },
  container: {
    width: Dimensions.get('window').width
  },
  center: {
    alignSelf: 'center'
  },
  progress: {
    position: 'absolute',
    marginBottom: 20
  }
})
