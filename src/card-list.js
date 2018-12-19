import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Container,
  Content,
  H3
} from 'native-base'
import FlashCard from './flash-card'

export default class CardList extends React.Component {
  render() {
    const { cards, editCard } = this.props
    return (
      <Container
        style={styles.view}
      >
        <Content
          padder
        >
          {
            cards.length >= 1
              ? cards.map((card, index) => {
                return (
                  <FlashCard
                    key={card.id}
                    editCard={editCard}
                    card={card}
                  />
                )
              })
              : <H3
                style={styles.guard}
              >No Cards Saved</H3>
          }
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    width: '100%'
  },
  guard: {
    paddingTop: 16,
    alignSelf: 'center'
  }
})
