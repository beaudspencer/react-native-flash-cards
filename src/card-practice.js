import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  Container,
  Content,
  H3
} from 'native-base'
import PracticeCard from './practice-card'

export default class CardPractice extends React.Component {
  render() {
    const { cards } = this.props

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.view}
      >
        {
          cards.length >= 1
            ? cards.map(card => {
              return (
                <PracticeCard
                  key={card.id}
                  card={card}
                />
              )
            })
            : (
              <Container
                style={styles.container}
              >
                <Content>
                  <H3
                    style={styles.text}
                  >
                  No cards to practice!
                  </H3>
                </Content>
              </Container>
            )
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    marginTop: '40%',
    alignContent: 'center'
  },
  container: {
    width: Dimensions.get('window').width,
    paddingTop: '50%'
  },
  text: {
    alignSelf: 'center'
  }
})
