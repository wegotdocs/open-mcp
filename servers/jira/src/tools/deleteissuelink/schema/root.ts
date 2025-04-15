import { z } from "zod"

export const inputParamsSchema = {
  "linkId": z.string().describe("The ID of the issue link.")
}