import { z } from "zod"

export const inputParamsSchema = {
  "check_id": z.string().uuid().describe("A unique identifier for a check."),
  "alert_id": z.string().uuid().describe("A unique identifier for an alert.")
}