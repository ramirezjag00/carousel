/* eslint-disable */
const faker = require('faker')
const converter = require('number-to-words')
const fs = require('fs')

const randomNumber = (num, addOn = 1) =>
  Math.floor(Math.random() * num) + addOn

const createBlock = (idx) => {
  const imageCategories = Object.keys(faker?.image).filter(
    (item) => item !== 'dataUri',
  )
  const imageCategory = () =>
    imageCategories[randomNumber(imageCategories.length - 2)]
  const categoryString = `{{image.${imageCategory()}}}`
  const imageUrl = () =>
    `${faker.fake(categoryString)}?random=${randomNumber(1000)}`
  const title = `${converter.toWordsOrdinal(idx + 1)}`
  const titleCapitalized = `${
    title.charAt(0).toUpperCase() + title.slice(1)
  } Block`
  return {
    title: titleCapitalized,
    images: [...Array(randomNumber(4, 1)).keys()].map((_i) => imageUrl()),
  }
}

const generateBlocks = (limit) => {
  let collection = []
  for (let i = 0; i < limit; i++) {
    collection = [...collection, createBlock(i)]
  }
  return collection
}
const limit = randomNumber(16, 5)
const data = generateBlocks(limit)
const json = JSON.stringify({
  data,
})

fs.writeFile('./db.json', json, 'utf8', () => null)
