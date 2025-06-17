import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "description": z.string().describe("API key description").optional(),
  "datetimeFormat": z.enum(["mysql","iso8601"]).describe("Date time format").optional(),
  "apiUser": z.string().describe("API user name").readonly().optional(),
  "secretKey": z.string().describe("API secret key's value").readonly().optional(),
  "createdTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}