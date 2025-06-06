import { z } from "zod"

export const inputParamsSchema = {
  "contentType": z.string().describe("Content type of the audio file.")
}