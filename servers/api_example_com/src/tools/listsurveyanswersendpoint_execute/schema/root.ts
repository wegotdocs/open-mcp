import { z } from "zod"

export const inputParamsSchema = {
  "surveyResultId": z.number().describe("Survey Result ID").optional(),
  "surveyQuestionId": z.number().describe("Survey Question ID").optional()
}