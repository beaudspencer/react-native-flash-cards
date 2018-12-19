import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import {
  Form,
  Input,
  Label,
  Item,
  Container,
  Content,
  Card,
  CardItem,
  Button,
  H3
} from 'native-base'

export default class CardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = !this.props.card
      ? {
        ques: '',
        ans: ''
      }
      : this.props.card
    this.createCard = this.createCard.bind(this)
  }
  handleSubmit() {

  }
  createCard() {
    const card = Object.assign({}, this.state)
    this.props.handleSubmit(card)
    this.setState({
      ques: '',
      ans: ''
    })
  }
  render() {
    const { card } = this.props
    return (
      <Container
        style={styles.card}
      >
        <Content
          padder
        >
          <Card>
            <Form>
              <CardItem
                header
                bordered
              >
                <H3>
                  {
                    card
                      ? 'Edit Card'
                      : 'Create A Flash Card'
                  }
                </H3>
              </CardItem>
              <CardItem>
                <Item
                  floatingLabel
                >
                  <Label>
                    Question:
                  </Label>
                  <Input
                    onChangeText={text => {
                      this.setState({
                        ques: text
                      })
                    }}
                    value={this.state.ques}
                  />
                </Item>
              </CardItem>
              <CardItem>
                <Item
                  floatingLabel
                >
                  <Label>
                    Answer:
                  </Label>
                  <Input
                    id="ans"
                    onChangeText={text => {
                      this.setState({
                        ans: text
                      })
                    }}
                    value={this.state.ans}
                  />
                </Item>
              </CardItem>
              <CardItem
                style={styles.save}
              >
                <Button
                  style={styles.button}
                  primary
                  onPress={this.createCard}
                >
                  <Text
                    style={styles.text}
                  >
                    Save
                  </Text>
                </Button>
              </CardItem>
            </Form>
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%'
  },
  save: {
    alignSelf: 'flex-end'
  },
  button: {
    paddingHorizontal: 18
  },
  text: {
    color: '#fff'
  }
})
