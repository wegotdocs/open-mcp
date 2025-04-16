import { z } from "zod"

export const inputParamsSchema = {
  "gid": z.string().describe("Globally unique identifier of the resource, as a string.").readonly().optional(),
  "resource_type": z.string().describe("The base type of this resource.").readonly().optional(),
  "name": z.string().describe("The name of the enum option.").optional(),
  "enabled": z.boolean().describe("Whether or not the enum option is a selectable value for the custom field.").optional(),
  "color": z.string().describe("The color of the enum option. Defaults to `none`.").optional()
}