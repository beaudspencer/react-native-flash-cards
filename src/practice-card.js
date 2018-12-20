import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Card,
  CardItem,
  H3
} from 'native-base'

export default class PracticeCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'question'
    }
  }
  render() {
    const { card } = this.props
    return (
      <Card>
        <CardItem>
          <H3
            style={styles.content}
          >
            {
              this.state.view === 'question'
                ? card.ques
                : card.ans
            }
          </H3>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    alignSelf: 'center'
  }
})
