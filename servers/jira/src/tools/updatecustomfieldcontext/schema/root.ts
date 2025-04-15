import { z } from "zod"

export const inputParamsSchema = {
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "description": z.string().describe("The description of the custom field context. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the custom field context. The name must be unique. The maximum length is 255 characters.").optional()
}