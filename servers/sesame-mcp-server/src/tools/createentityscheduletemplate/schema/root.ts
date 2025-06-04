import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("Employee UUID"),
  "scheduleTemplateId": z.string().uuid().describe("Schedule template UUID"),
  "startDate": z.string().date().describe("Start date"),
  "endDate": z.string().date().describe("End date").optional()
}