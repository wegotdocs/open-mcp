import { z } from "zod"

export const inputParamsSchema = {
  "channelId": z.string().describe("The ID that YouTube uses to uniquely identify the channel that is transmitting the stream.").optional(),
  "description": z.string().describe("The stream's description. The value cannot be longer than 10000 characters.").optional(),
  "isDefaultStream": z.boolean().optional(),
  "publishedAt": z.string().datetime({ offset: true }).describe("The date and time that the stream was created.").optional(),
  "title": z.string().describe("The stream's title. The value must be between 1 and 128 characters long.").optional()
}