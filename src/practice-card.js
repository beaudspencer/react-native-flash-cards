import React from 'react'
import {
  StyleSheet,
  TouchableOpacity
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
    const { card } = this.props
    return (
      <TouchableOpacity
        onPress={this.flip}
      >
        <Card>
          <CardItem>
            <H3
              style={styles.content}
            >
              {
                !this.state.view
                  ? card.ques
                  : card.ans
              }
            </H3>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    alignSelf: 'center'
  }
})
