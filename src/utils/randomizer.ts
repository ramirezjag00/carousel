const randomNumber = (num: number, addOn = 1): number =>
  Math.floor(Math.random() * num) + addOn

export default randomNumber
