import { z } from "zod"

export const inputParamsSchema = {
  "question": z.string().describe("Question"),
  "answer": z.string().describe("Answer"),
  "order": z.number().describe("Order of FAQ"),
  "isDraft": z.boolean().describe("Is a draft?"),
  "clientId": z.string().describe("Client ID")
}