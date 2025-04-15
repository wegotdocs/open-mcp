import { z } from "zod"

export const inputParamsSchema = {
  "propertyKey": z.string().describe("The key of the property."),
  "currentValue": z.any().describe("The value of properties to perform the bulk operation on.").optional(),
  "entityIds": z.array(z.number().int()).describe("List of issues to perform the bulk delete operation on.").optional()
}