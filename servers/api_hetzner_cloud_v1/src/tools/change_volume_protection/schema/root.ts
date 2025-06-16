import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Volume."),
  "delete": z.boolean().describe("If true, prevents the Volume from being deleted").optional()
}