import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { colors } from '@constants/theme'

interface Props {
  title: string
  uri: string
}

const Item: React.FC<Props> = (props) => {
  const { title, uri } = props

  return (
    <View>
      <Text style={styles.itemTitle}>{title}</Text>
      <Image source={{ uri }} style={styles.itemImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 20,
    color: colors?.$mineShaft,
    fontWeight: '700',
  },
  itemImage: {
    height: 140,
    width: 140,
    resizeMode: 'cover',
    backgroundColor: colors.$azalea,
    marginBottom: 20,
    borderRadius: 4,
  },
})

export default Item
