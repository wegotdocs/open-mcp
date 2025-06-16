import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Image."),
  "delete": z.boolean().describe("If true, prevents the snapshot from being deleted").optional()
}