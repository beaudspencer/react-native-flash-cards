import React from 'react'
import {
  View
} from 'react-native'

export default class ProgressBar extends React.Component {
  render() {
    const { progress } = this.props
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
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#00f'
          }}
        >
        </View>
      </View>
    )
  }
}
