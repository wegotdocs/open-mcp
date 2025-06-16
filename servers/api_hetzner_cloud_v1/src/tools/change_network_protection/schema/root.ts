import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Network."),
  "delete": z.boolean().describe("Delete protection setting.\n\nIf true, prevents the [Network](#networks) from being deleted.\n").optional()
}