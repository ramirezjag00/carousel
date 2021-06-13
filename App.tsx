import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { Item as ItemType } from '@customtypes/item'
import api from '@constants/api'
import randomNumber from '@utils/randomizer'
import Button from '@components/common/Button'
import Item from '@components/common/Item'

const App: React.FC = () => {
  const [collection, setCollection] = useState<ItemType[] | []>([])
  const [activeCollection, setActiveCollection] = useState({ start: 0, end: 4 })

  useEffect(() => {
    const fetchCollection = async (): Promise<void> => {
      const response = await fetch(`${api}/data`)
      const data = (await response.json()) as ItemType[]
      setCollection(data)
    }

    if (!collection.length) {
      fetchCollection()
    }
  }, [collection])

  const onPressBtn =
    (isPrevious = false) =>
    () => {
      let currentStart = activeCollection.start
      let currentEnd = activeCollection.end
      const start = isPrevious ? (currentStart -= 4) : (currentStart += 4)
      const end = isPrevious ? (currentEnd -= 4) : (currentEnd += 4)
      setActiveCollection({
        start,
        end,
      })
    }

  const isNextDisabled = collection.length === activeCollection.end
  const isPreviousDisabled = !activeCollection.start

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Carousel</Text>
      <Text style={styles.subtitle}>- made using non-carousel plugins</Text>
      <View style={styles.contentContainer}>
        {!!collection.length &&
          collection
            .slice(activeCollection.start, activeCollection.end)
            .map((item: ItemType) => {
              const rand = randomNumber(item.images.length, 0)
              return (
                <Item
                  key={item.title}
                  title={item.title}
                  uri={item.images[rand]}
                />
              )
            })}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="Previous"
          onPress={onPressBtn(true)}
          disabled={isPreviousDisabled}
        />
        <Button
          label="Next"
          onPress={onPressBtn(false)}
          disabled={isNextDisabled}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 16,
    alignSelf: 'center',
  },
  contentContainer: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
})

export default App
