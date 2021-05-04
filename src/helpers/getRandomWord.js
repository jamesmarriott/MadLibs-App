// go through the sub ID

export function getRandomWord(InpType, {randWords, ...data}) {
  let randWord = ''
  // takes in numerical code
  // returns a random word based on that code
      Object.values(randWords).map(value => {
        if (value.id === InpType) {
          const randomIndex = Math.floor(Math.random() * value.words.length)
          randWord = value.words[randomIndex]
        }
      })
    return randWord
}

// go through the sub ID
