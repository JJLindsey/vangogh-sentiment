import Sentiment from "sentiment";

const sentiment = new Sentiment()

export function analyzeTextArray(texts) {
  return texts.map((item) => {
    const result = sentiment.analyze(item.text)
    return {
      ...item,
      sentimentScore: result.score,
      comparative: result.comparative
    }
  })
}
