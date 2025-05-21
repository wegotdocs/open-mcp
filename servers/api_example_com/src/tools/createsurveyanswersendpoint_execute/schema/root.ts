import { z } from "zod"

export const inputParamsSchema = {
  "surveyResultId": z.number().describe("Survey Result ID"),
  "userId": z.string().describe("User ID"),
  "surveyAnswers": z.array(z.string()).describe("Survey Answers Array")
}