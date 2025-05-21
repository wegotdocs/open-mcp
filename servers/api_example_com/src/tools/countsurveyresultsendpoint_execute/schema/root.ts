import { z } from "zod"

export const inputParamsSchema = {
  "surveyId": z.number().describe("Survey ID").optional()
}