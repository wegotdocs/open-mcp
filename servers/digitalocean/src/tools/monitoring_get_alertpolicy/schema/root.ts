import { z } from "zod"

export const inputParamsSchema = {
  "alert_uuid": z.string().describe("A unique identifier for an alert policy.")
}