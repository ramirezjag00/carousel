import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'

import { Item } from '@customtypes/item'
import api from '@constants/api'

const App: React.FC = () => {
  const [collection, setCollection] = useState<Item[] | []>([])

  useEffect(() => {
    const fetchCollection = async (): Promise<void> => {
      const response = await fetch(`${api}/data`)
      const data = (await response.json()) as Item[]
      setCollection(data)
      console.log('data', data)
    }

    if (!collection.length) {
      console.log('collection', collection)
      fetchCollection()
    }
  }, [collection])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Carousel</Text>
      <Text style={styles.subtitle}>- made using non-carousel plugins</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 16,
    alignSelf: 'center',
  },
})

export default App
