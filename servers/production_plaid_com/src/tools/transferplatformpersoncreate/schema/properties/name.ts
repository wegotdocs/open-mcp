import { z } from "zod"

export const inputParamsSchema = {
  "given_name": z.string().describe("A string with at least one non-whitespace character, with a max length of 100 characters."),
  "family_name": z.string().describe("A string with at least one non-whitespace character, with a max length of 100 characters.")
}