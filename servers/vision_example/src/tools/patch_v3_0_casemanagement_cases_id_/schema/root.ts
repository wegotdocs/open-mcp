import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The case ID"),
  "associatedItemIds": z.array(z.string()).describe("A list of alert IDs and incident IDs associated with the case").optional(),
  "description": z.string().max(1048576).describe("The user-defined description of the case").optional(),
  "findings": z.enum(["NoFindings","Noteworthy","TruePositive","FalsePositive","BenignTruePositive"]).describe("The investigation findings of the case").optional(),
  "name": z.string().max(512).describe("The name of the case").optional(),
  "priority": z.enum(["P0","P1","P2","P3"]).describe("The priority level of the case").optional(),
  "relatedCaseIds": z.array(z.string()).describe("A list of the IDs for related cases").optional(),
  "status": z.enum(["Open","In-progress","Closed","Deleted"]).describe("The status of the case\nThe \"Deleted\" status is used by Case Management to signify that the case was deleted in the third-party ticketing system and syncing has stopped. Case Management does not delete the case.").optional(),
  "holder": z.enum(["Customer","Analyst"]).describe("The current role of the owner of the case.").optional(),
  "externalTicketId": z.string().describe("The ID of the case in the external ticketing system.").optional(),
  "externalTicketUpdatedDateTime": z.string().describe("The date the external ticket was last updated in ISO 8601 format.").optional(),
  "If-Match": z.string().describe("Provide the ETag of the resource to be updated").optional()
}