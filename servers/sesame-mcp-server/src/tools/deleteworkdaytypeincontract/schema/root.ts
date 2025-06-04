import { z } from "zod"

export const inputParamsSchema = {
  "workdayTypeId": z.string().uuid().describe("Workday type ID")
}