import { z } from "zod"

export const inputParamsSchema = {
  "fieldIdOrKey": z.string().describe("The ID or key of the custom field, for example `customfield_10000`."),
  "configurations": z.array(z.object({ "configuration": z.any().describe("The field configuration.").optional(), "fieldContextId": z.string().describe("The ID of the field context the configuration is associated with.").readonly(), "id": z.string().describe("The ID of the configuration."), "schema": z.any().describe("The field value schema.").optional() }).strict().describe("Details of the contextual configuration for a custom field.")).min(1).max(1000).describe("The list of custom field configuration details.")
}