import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "repository_names": z.array(z.string()).min(1).max(30).describe("The names of repositories that the custom property values will be applied to."),
  "properties": z.array(z.object({ "property_name": z.string().describe("The name of the property"), "value": z.string().nullable().describe("The value assigned to the property") }).describe("Custom property name and associated value")).describe("List of custom property names and associated values to apply to the repositories.")
}