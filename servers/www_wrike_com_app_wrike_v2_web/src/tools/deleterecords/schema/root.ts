import { z } from "zod"

export const inputParamsSchema = {
  "databaseId": z.string(),
  "recordIds": z.array(z.string()).describe("Records to delete")
}