import { z } from "zod"

export const inputParamsSchema = {
  "issueTypeId": z.string().describe("The ID of the issue type."),
  "propertyKey": z.string().describe("The key of the issue type property. The maximum length is 255 characters.")
}