export async function apiCaller () {
  const wordPromise = await fetch("https://funnywords.herokuapp.com/api/words/")
  const randWordList = await wordPromise.json()
  return randWordList
}