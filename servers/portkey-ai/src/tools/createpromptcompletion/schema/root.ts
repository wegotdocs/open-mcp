import { z } from "zod"

export const inputParamsSchema = {
  "promptId": z.string().describe("The unique identifier of the prompt template to use")
}