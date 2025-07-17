import { z } from "zod"

export const inputParamsSchema = {
  "fieldName": z.string(),
  "name": z.string().describe("Unique ID of the field.\n\nUse this \"name\" to refer to this field in any API operations."),
  "title": z.string().describe("Human readable name of the field.").optional(),
  "type": z.enum(["string","number","boolean","integer","any"]).describe("Type of the field. JSON schema compatible"),
  "format": z.enum(["date","date-time"]).nullable().describe("Format of the field. Applies to String fields only. JSON schema compatible").optional(),
  "readOnly": z.boolean().describe("Whether this field can be changed by the user or via the API."),
  "tooltip": z.string().describe("More information about this field (to be shown in a tooltip)").optional(),
  "icon": z.string().describe("Field icon, if set.").optional(),
  "array": z.boolean().describe("Whether this field holds an array of values."),
  "canMapFrom": z.boolean().describe("Internal").optional(),
  "firstClassField": z.boolean().describe("Internal.").optional(),
  "createdBy": z.union([z.string(), z.enum(["system","user"])]).describe("Internal. Field creator.").optional()
}