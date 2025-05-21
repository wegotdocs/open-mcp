import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("FAQ ID"),
  "question": z.string().describe("Question").optional(),
  "answer": z.string().describe("Answer").optional(),
  "order": z.number().describe("Order of FAQ").optional(),
  "isDraft": z.boolean().describe("Is a draft?").optional()
}