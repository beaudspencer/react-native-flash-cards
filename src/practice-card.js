import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import {
  Card,
  CardItem,
  H3,
  Container,
  Content
} from 'native-base'

export default class PracticeCard extends React.Component {
  render() {
    const { card, answer, flip } = this.props
    return (
      <Container
        style={styles.container}
      >
        <Content
          padder
        >
          <TouchableOpacity
            onPress={flip}
            style={styles.card}
          >
            <Card
              style={styles.card}
            >
              <CardItem
                style={styles.item}
              >
                <H3>
                  {
                    answer
                      ? 'Answer:'
                      : 'Question:'
                  }
                </H3>
              </CardItem>
              <CardItem
                style={styles.item}
              >
                <H3>
                  {
                    answer
                      ? card.ques
                      : card.ans
                  }
                </H3>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Content>
      </Container>
    )
  }
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    height: 240,
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  container: {
    width: deviceWidth
  },
  item: {
    alignSelf: 'center'
  }
})
