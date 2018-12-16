import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import FlashCard from './flash-card'

export default class CardList extends React.Component {
  render() {
    const { cards } = this.props
    return (
      <View
        style={styles.view}
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row'
  }
})
