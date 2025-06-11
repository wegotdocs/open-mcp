import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.number().int(),
  "version": z.number().int().describe("ticket version"),
  "clientId": z.number().int().describe("Client (Organization) identifier"),
  "ticketFormId": z.number().int().describe("Ticket form identifier"),
  "locationId": z.number().int().nullable().describe("Location identifier").optional(),
  "nodeId": z.number().int().nullable().describe("Device identifier").optional(),
  "subject": z.string().min(0).max(200),
  "status": z.string(),
  "type": z.enum(["PROBLEM","QUESTION","INCIDENT","TASK"]).nullable().describe("Type of ticket").optional(),
  "cc": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `cc` to the tool, first call the tool `expandSchema` with \"/properties/cc\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "assignedAppUserId": z.number().int().nullable().optional(),
  "requesterUid": z.string().uuid(),
  "severity": z.enum(["NONE","MINOR","MODERATE","MAJOR","CRITICAL"]).nullable().optional(),
  "priority": z.enum(["NONE","LOW","MEDIUM","HIGH"]).nullable().optional(),
  "parentTicketId": z.number().int().nullable().describe("Ticket parent identifier").optional(),
  "tags": z.array(z.string().nullable()).nullable().optional(),
  "attributes": z.array(z.object({ "id": z.number().int().nullable().optional(), "attributeId": z.number().int().describe("Attribute identifier"), "value": z.string().describe("Attribute value") }).nullable()).nullable().optional()
}