import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { colors } from '@constants/theme'

interface Props {
  label: string
  disabled: boolean
  onPress: () => void
}

const Button: React.FC<Props> = (props) => {
  const { label, disabled, onPress } = props

  const buttonStyle = disabled ? styles.disabledButton : styles.button

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} disabled={disabled}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    width: 140,
    backgroundColor: colors.$geraldine,
    borderRadius: 6,
  },
  disabledButton: {
    paddingVertical: 10,
    width: 140,
    backgroundColor: colors.$boulder,
    borderRadius: 6,
  },
  buttonLabel: {
    fontSize: 18,
    alignSelf: 'center',
    color: colors?.$vistaWhite,
    fontWeight: '800',
  },
})

export default Button
