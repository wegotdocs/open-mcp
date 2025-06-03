import { z } from "zod"

export const inputParamsSchema = {
  "startDate": z.string().datetime({ offset: true }).describe("Start date for duplicate check"),
  "endDate": z.string().datetime({ offset: true }).describe("End date for duplicate check")
}