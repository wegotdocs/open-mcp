import { z } from "zod"

export const inputParamsSchema = {
  "BatchItemRequest": z.array(z.object({ "Invoice": z.object({ "Id": z.string().optional(), "SyncToken": z.string().optional() }).optional(), "Query": z.string().optional(), "SalesReceipt": z.object({ "Id": z.string().optional(), "PrivateNote": z.string().optional(), "SyncToken": z.string().optional(), "domain": z.string().optional(), "sparse": z.boolean().optional() }).optional(), "Vendor": z.object({ "DisplayName": z.string().optional() }).optional(), "bId": z.string().optional(), "operation": z.string().optional() })).optional()
}