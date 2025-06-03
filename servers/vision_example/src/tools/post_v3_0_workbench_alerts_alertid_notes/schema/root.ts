import { z } from "zod"

export const inputParamsSchema = {
  "alertId": z.string().describe("Unique alphanumeric string that identifies a Workbench alert."),
  "content": z.string().max(500000).describe("Unique alphanumeric string that identifies a Workbench alert.")
}