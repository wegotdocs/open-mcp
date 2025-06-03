import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("Connector primary identifier"),
  "healthDetails": z.boolean().describe("Include health details about latest connections and percentage of errors (connection rate)").optional()
}