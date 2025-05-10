import { z } from "zod"

export const inputParamsSchema = {
  "text": z.string().describe("The text to match against the available slugs.")
}