import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The case ID"),
  "contentId": z.string().describe("The content ID")
}