import { z } from "zod"

export const inputParamsSchema = {
  "associatedItemIds": z.array(z.string()).describe("A list of the alert IDs and incident IDs associated with the case").optional(),
  "description": z.string().max(1048576).describe("The user-defined description of the case").optional(),
  "externalTicketAlias": z.string().max(128).describe("The human-readable ID of the case in the 3rd-party ticketing system"),
  "externalTicketId": z.string().max(128).describe("The unique ID of the case in the 3rd-party ticketing system"),
  "findings": z.enum(["NoFindings","Noteworthy","TruePositive","FalsePositive","BenignTruePositive"]).describe("The investigation findings of the case").optional(),
  "name": z.string().max(512).describe("The user-defined name of the case"),
  "priority": z.enum(["P0","P1","P2","P3"]).describe("The priority level of the case"),
  "relatedCaseIds": z.array(z.string()).describe("A list of the IDs for related cases").optional(),
  "status": z.enum(["Open","In-progress","Closed"]).describe("The status of the case"),
  "holder": z.enum(["Customer","Analyst"]).describe("The current role of the owner of the case.").optional(),
  "externalTicketCreatedDateTime": z.string().describe("The date the external ticket was created in ISO 8601 format.").optional()
}