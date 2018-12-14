import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Form,
  Input,
  Label,
  Item,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Button,
  Text
} from 'native-base'

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ques: '',
      ans: ''
    }
    this.createCard = this.createCard.bind(this)
  }
  createCard() {
    const card = Object.assign({}, this.state)
    this.props.handleSubmit(card)
  }
  render() {
    return (
      <Container
        style={styles.card}
      >
        <Header />
        <Content
          padder
        >
          <Card>
            <Form>
              <CardItem
                header
                bordered
              >
                <Text>
                  Create a Flash Card
                </Text>
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
                  />
                </Item>
              </CardItem>
              <CardItem
                style={styles.save}
              >
                <Button
                  primary
                  onPress={this.createCard}
                >
                  <Text>
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
  }
})
