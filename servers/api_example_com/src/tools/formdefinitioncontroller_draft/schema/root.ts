import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("FormId Example: WorkflowId for start form"),
  "versionId": z.string().describe("Form version Example: Workflow version number"),
  "versionLabel": z.string().describe("Form version Example: major designer version 2.0").optional(),
  "versionComments": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `versionComments` to the tool, first call the tool `expandSchema` with \"/properties/versionComments\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Version Comments</property-description>").optional(),
  "name": z.string().describe("Form Name Example: Workflow Name"),
  "description": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `description` to the tool, first call the tool `expandSchema` with \"/properties/description\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Form description</property-description>").optional(),
  "allowAnonymous": z.boolean().describe("Allow Anonymous access to Form Definition"),
  "formDefinition": z.string().describe("Form definition to save"),
  "useInMobileAndMyNintex": z.boolean().describe("Is form consumable in mobile and MyNintex ?"),
  "userId": z.string().describe("User Id that performed action"),
  "formType": z.enum(["startform","tableform"]).describe("Type of the form").optional(),
  "parentId": z.string().describe("Id of the related parent object. For a Start form, the parentId will be the workflowId or formId, as these are the same value. For a Table form, the parentId will be the tableId.").optional(),
  "ntx-correlation-id": z.string(),
  "Authorization": z.string()
}