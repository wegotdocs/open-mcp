import { z } from "zod"

export const inputParamsSchema = {
  "date": z.string().date().describe("Date of the time entry"),
  "user": z.string(),
  "project": z.string(),
  "workload": z.string()
}