import { z } from "zod"

export const inputParamsSchema = {
  "issueTypeId": z.string().describe("The ID of the issue type.")
}