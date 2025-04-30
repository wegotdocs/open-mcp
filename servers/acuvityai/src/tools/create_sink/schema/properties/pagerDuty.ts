import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string().describe("The token for PagerDuty events.")
}