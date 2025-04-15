import { z } from "zod"

export const inputParamsSchema = {
  "updateHistory": z.boolean().describe("Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. When provided, the issue type and request type are added to the user's history for a project. These values are then used to provide defaults on the issue create screen.").optional(),
  "fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fields` to the tool, first call the tool `expandSchema` with \"/properties/fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`.</property-description>").optional(),
  "historyMetadata": z.string().optional(),
  "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("Details of issue properties to be add or update.").optional(),
  "transition": z.string().optional(),
  "update": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `update` to the tool, first call the tool `expandSchema` with \"/properties/update\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in `fields`.</property-description>").optional()
}