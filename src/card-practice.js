import React from 'react'
import {
  ScrollView
} from 'react-native'
import PracticeCard from './practice-card'

export default class CardPractice extends React.Component {
  render() {
    const { cards } = this.props
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {
          cards.map(card => {
            return (
              <PracticeCard key={card.id} card={card}/>
            )
          })
        }
      </ScrollView>
    )
  }
}
