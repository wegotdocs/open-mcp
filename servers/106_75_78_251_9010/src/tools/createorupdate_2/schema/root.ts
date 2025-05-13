import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "warehouseCode": z.string(),
  "ruleCode": z.string(),
  "ruleName": z.string(),
  "ruleType": z.enum(["OUTBOUND","STOCKTAKE"]),
  "enable": z.boolean().optional(),
  "details": z.array(z.object({ "type": z.enum(["OWNER","CUSTOMER_ORDER_TYPE","ORIG_PLATFORM","CARRIER","NUMBER"]), "subDetails": z.array(z.object({ "value": z.string(), "priority": z.number().int().optional() })) }))
}