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
  update(direction) {
    const { updateIndex } = this.props
    updateIndex(direction)
  }
  render() {
    const { cards } = this.props
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
                    card={item}
                  />
                )
              }}
              onSwipeLeft={() => {
                this.update(false)
              }}
              onSwipeRight={() => {
                this.update(true)
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
