import { z } from "zod"

export const inputParamsSchema = {
  "surveyId": z.number().describe("Survey ID").optional(),
  "status": z.string().describe("Status").optional(),
  "userId": z.string().describe("User ID").optional()
}