import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server."),
  "delete": z.boolean().describe("If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value)").optional(),
  "rebuild": z.boolean().describe("If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value)").optional()
}