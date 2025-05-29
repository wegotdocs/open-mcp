import { z } from "zod"

export const inputParamsSchema = {
  "databaseId": z.string(),
  "recordId": z.string(),
  "fieldIds": z.array(z.string()).describe("Columns (properties) to be loaded in the result").optional()
}