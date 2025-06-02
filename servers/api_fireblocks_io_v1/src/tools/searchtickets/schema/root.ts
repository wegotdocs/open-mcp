import { z } from "zod"

export const inputParamsSchema = {
  "q": z.string().min(1).describe("Search string - counterparty name or asset or ticketId. Optional").optional(),
  "statuses": z.array(z.enum(["DRAFT","PENDING_APPROVAL","OPEN","IN_SETTLEMENT","FULFILLED","EXPIRED","CANCELED"])).describe("Ticket statuses for Smart Transfer tickets. Optional").optional(),
  "networkId": z.string().describe("NetworkId that is used in the ticket\t. Optional").optional(),
  "createdByMe": z.boolean().describe("Filter created tickets by created by self or by others. Optional").optional(),
  "expiresAfter": z.string().datetime({ offset: true }).describe("Lower bound of search range. Optional").optional(),
  "expiresBefore": z.string().datetime({ offset: true }).describe("Upper bound of search range. Optional").optional(),
  "type": z.enum(["ASYNC","DVP"]).describe("Type of transfer. ASYNC executes transfers as they are funded, DVP executes all terms (legs) as one dvp transfer").optional(),
  "externalRefId": z.string().min(1).max(64).describe("External ref. ID that workspace can use to identify ticket outside of Fireblocks system.").optional(),
  "after": z.string().describe("ID of the record after which to fetch $limit records").optional(),
  "limit": z.number().gte(1).describe("Number of records to fetch. By default, it is 100").optional()
}