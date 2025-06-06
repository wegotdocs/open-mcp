import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("Key of the audio file with the dictation."),
  "lang": z.string().describe("Language of the dictation.").optional()
}