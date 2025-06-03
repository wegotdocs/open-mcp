import { z } from "zod"

export const inputParamsSchema = {
  "alertId": z.string().describe("Unique alphanumeric string that identifies a Workbench alert.")
}