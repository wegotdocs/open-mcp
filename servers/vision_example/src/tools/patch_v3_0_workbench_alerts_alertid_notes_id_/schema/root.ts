import { z } from "zod"

export const inputParamsSchema = {
  "alertId": z.string().describe("Unique alphanumeric string that identifies a Workbench alert."),
  "id": z.number().int().describe("Numeric string that identifies a Workbench alert note."),
  "content": z.string().max(500000),
  "If-Match": z.string().describe("Parameter that allows you to specify the version of the resource to be updated.").optional()
}