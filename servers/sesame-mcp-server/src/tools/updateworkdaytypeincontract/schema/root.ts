import { z } from "zod"

export const inputParamsSchema = {
  "workdayTypeId": z.string().uuid().describe("Workday Type ID"),
  "name": z.string().date().describe("Name of the workday type")
}