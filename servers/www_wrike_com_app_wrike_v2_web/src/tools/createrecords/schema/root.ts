import { z } from "zod"

export const inputParamsSchema = {
  "databaseId": z.string(),
  "fieldIds": z.array(z.string()).describe("Columns (properties) to be loaded in the result").optional(),
  "requestId": z.string().describe("Should be any unique value, e.g. UUID, current timestamp etc"),
  "data": z.array(z.object({ "title": z.string(), "fieldValues": z.record(z.any()) }))
}