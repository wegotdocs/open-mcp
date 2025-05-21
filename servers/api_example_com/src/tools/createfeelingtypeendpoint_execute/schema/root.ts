import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the feeling type"),
  "emojiCode": z.string().describe("Code emoji of the feeling type")
}