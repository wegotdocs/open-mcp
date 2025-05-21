import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("ID of the News"),
  "isDraft": z.boolean().describe("Draft status")
}