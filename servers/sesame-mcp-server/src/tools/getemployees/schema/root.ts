import { z } from "zod"

export const inputParamsSchema = {
  "from": z.string().date().describe("The start of the date range for fetching employee information."),
  "to": z.string().date().describe("The end of the date range for fetching employee information.")
}