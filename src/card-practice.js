import React from 'react'
import {
  ScrollView,
  StyleSheet
} from 'react-native'
import PracticeCard from './practice-card'

export default class CardPractice extends React.Component {
  render() {
    const { cards } = this.props
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.container}
      >
        {
          cards.map(card => {
            return (
              <PracticeCard
                key={card.id}
                card={card}
              />
            )
          })
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignContent: 'center'
  }
})
