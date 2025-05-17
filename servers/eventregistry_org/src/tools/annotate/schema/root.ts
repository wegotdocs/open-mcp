import { z } from "zod"

export const inputParamsSchema = {
  "apiKey": z.string().describe("Your API key"),
  "text": z.string().describe("Define a text that you'll like to see annotated."),
  "minLinkFrequency": z.number().int().describe("The minimum number of times the phrase should appear in the link in order for use to use it as a candidate for the <a href=\"#\">annotation</a>.").optional(),
  "minLinkRelFrequency": z.number().describe("Consider the candidate only if the given text points to the candidate with probability above this value. Value between 0 and 1.").optional(),
  "nWordsToIgnoreFromList": z.number().int().describe("Use this setting to ignore common phrases. If a phrase consists entirely of very frequent words, it will be ignore. A word is considered frequent if it is one of the most frequent words (in terms of document frequency) in the Wikipedia of the corresponding language. If 0 it will disable this heuristic.").optional(),
  "minPMentionGivenPhrase": z.number().describe("'Probability that the given phrase, if found on Wikipedia, is annotated with the concept. If non-zero, it can help to remove the common words.'").optional(),
  "pageRankSqThreshold": z.number().describe("'Probability that the given phrase, if found on Wikipedia, is annotated with the concept. If non-zero, it can help to remove the common words.'").optional(),
  "applyPageRankSqThreshold": z.boolean().describe("'Apply pageRankSqThreshold to the requested response.'").optional()
}