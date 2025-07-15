import { z } from "zod"

export const inputParamsSchema = {
  "holiday_id": z.number().int().describe("The holiday ID")
}