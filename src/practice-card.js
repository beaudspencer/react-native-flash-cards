import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions
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
        style={styles.card}
      >
        <Card
          style={styles.card}
        >
          <CardItem>
            <H3
              style={styles.content}
            >
              {
                !this.state.answer
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

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    height: '92%',
    width: deviceWidth
  },
  content: {
    alignSelf: 'center'
  }
})
