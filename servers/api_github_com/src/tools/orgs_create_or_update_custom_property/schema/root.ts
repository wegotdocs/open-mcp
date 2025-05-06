import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "custom_property_name": z.string().describe("The custom property name"),
  "value_type": z.enum(["string","single_select","multi_select","true_false"]).describe("The type of the value for the property"),
  "required": z.boolean().describe("Whether the property is required.").optional(),
  "default_value": z.string().nullable().describe("Default value of the property").optional(),
  "description": z.string().nullable().describe("Short description of the property").optional(),
  "allowed_values": z.array(z.string().max(75)).max(200).nullable().describe("An ordered list of the allowed values of the property.\nThe property can have up to 200 allowed values.").optional(),
  "values_editable_by": z.enum(["org_actors","org_and_repo_actors"]).nullable().describe("Who can edit the values of the property").optional()
}