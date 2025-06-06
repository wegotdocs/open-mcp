import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("Key of the audio file with the dictation."),
  "lang": z.string().describe("Language of the dictation.").optional(),
  "transcription": z.string().describe("Transcription of the dictation."),
  "formattedTranscription": z.string().describe("Formatted transcription of the dictation."),
  "healthCenterGroup": z.string().describe("Health center group of the dictation.")
}