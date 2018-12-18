import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Container,
  Content
} from 'native-base'
import FlashCard from './flash-card'

export default class CardList extends React.Component {
  render() {
    const { cards } = this.props
    return (
      <Container
        style={styles.view}
      >
        <Content
          padder
        >
          {
            cards.map((card, index) => {
              return (
                <FlashCard
                  key={index}
                  card={card}
                />
              )
            })
          }
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    width: '100%'
  }
})
