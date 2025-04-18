import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("Name of the issue type."),
  "is_enabled": z.boolean().describe("Whether or not the issue type is enabled at the organization level."),
  "description": z.string().nullable().describe("Description of the issue type.").optional(),
  "color": z.enum(["gray","blue","green","yellow","orange","red","pink","purple"]).nullable().describe("Color for the issue type.").optional()
}