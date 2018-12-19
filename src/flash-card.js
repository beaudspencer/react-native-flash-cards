import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'
import {
  Card,
  CardItem,
  Icon,
  Button,
  H3
} from 'native-base'

export default class FlashCard extends React.Component {
  render() {
    const { ques, ans } = this.props.card
    return (
      <Card>
        <CardItem>
          <H3>
            Question:
          </H3>
        </CardItem>
        <CardItem>
          <Text
            style={stlyes.text}
          >
            {ques}
          </Text>
        </CardItem>
        <CardItem>
          <H3>
              Answer:
          </H3>
        </CardItem>
        <CardItem>
          <Text
            style={stlyes.text}
          >
            {ans}
          </Text>
        </CardItem>
        <CardItem
          bordered
          footer
          style={stlyes.edit}
        >
          <Button
            transparent
            style={stlyes.button}
          >
            <Icon
              type="FontAwesome"
              name="edit"
            />
          </Button>
        </CardItem>
      </Card>
    )
  }
}

const stlyes = StyleSheet.create({
  text: {
    fontSize: 16
  },
  edit: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end'
  }
})
