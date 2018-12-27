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

export default class CardPractice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: false
    }
    this.flip = this.flip.bind(this)
  }
  flip() {
    this.setState({
      answer: !this.state.answer
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
            ? <DeckSwiper
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
              }}
              onSwipeRight={(card) => {
                update(true, card)
                this.setState({
                  answer: false
                })
              }}
            />
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
  }
})
