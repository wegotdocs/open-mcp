import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "properties": z.array(z.object({ "property_name": z.string().describe("The name of the property"), "value": z.string().nullable().describe("The value assigned to the property") }).describe("Custom property name and associated value")).describe("A list of custom property names and associated values to apply to the repositories.")
}