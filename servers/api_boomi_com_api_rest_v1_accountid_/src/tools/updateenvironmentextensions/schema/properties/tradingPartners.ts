import { z } from "zod"

export const inputParamsSchema = {
  "tradingPartner": z.array(z.object({ "category": z.array(z.object({ "field": z.array(z.object({ "componentOverride": z.boolean().optional(), "customProperties": z.object({ "properties": z.array(z.object({ "encrypted": z.boolean().optional(), "key": z.string().optional(), "value": z.string().optional() })).optional() }).optional(), "encryptedValueSet": z.boolean().optional(), "id": z.string().optional(), "useDefault": z.boolean().optional(), "usesEncryption": z.boolean().optional(), "value": z.string().optional() })).optional(), "id": z.string().optional(), "name": z.string().optional() })).optional(), "id": z.string().optional(), "name": z.string().optional() })).optional()
}