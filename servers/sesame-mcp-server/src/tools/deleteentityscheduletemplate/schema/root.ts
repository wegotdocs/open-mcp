import { z } from "zod"

export const inputParamsSchema = {
  "entityScheduleTemplateId": z.string().uuid().describe("Employee schedule template UUID")
}