import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the filter."),
  "permissionId": z.number().int().describe("The ID of the share permission.")
}