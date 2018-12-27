import React from 'react'
import {
  View
} from 'react-native'

export default class ProgressBar extends React.Component {
  render() {
    return (
      <View
        style={{
          alignSelf: 'center',
          width: '92%',
          height: 16
        }}
      >
        <View
          style={{
            width: '20%',
            height: '100%',
            backgroundColor: '#00f'
          }}
        >
        </View>
      </View>
    )
  }
}
