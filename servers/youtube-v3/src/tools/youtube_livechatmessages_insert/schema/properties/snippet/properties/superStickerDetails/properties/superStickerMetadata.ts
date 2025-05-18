import { z } from "zod"

export const inputParamsSchema = {
  "altText": z.string().describe("Internationalized alt text that describes the sticker image and any animation associated with it.").optional(),
  "altTextLanguage": z.string().describe("Specifies the localization language in which the alt text is returned.").optional(),
  "stickerId": z.string().describe("Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker.").optional()
}