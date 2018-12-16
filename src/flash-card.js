import React from 'react'
import {
  Text
} from 'react-native'
import {
  Card,
  CardItem,
  Body,
  H3
} from 'native-base'

export default class FlashCard extends React.Component {
  render() {
    const { ques, ans } = this.props.card
    return (
      <Card>
        <CardItem>
          <H3>
            {ques}
          </H3>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              {ans}
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}
