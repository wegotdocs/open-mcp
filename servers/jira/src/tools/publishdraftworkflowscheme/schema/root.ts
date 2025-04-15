import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "validateOnly": z.boolean().describe("Whether the request only performs a validation.").optional(),
  "statusMappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type."), "newStatusId": z.string().describe("The ID of the new status."), "statusId": z.string().describe("The ID of the status.") }).strict().describe("Details about the mapping from a status to a new status for an issue type.")).describe("Mappings of statuses to new statuses for issue types.").optional()
}