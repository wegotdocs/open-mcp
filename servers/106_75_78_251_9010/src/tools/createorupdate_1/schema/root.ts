import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "warehouseCode": z.string(),
  "ruleCode": z.string(),
  "ruleName": z.string(),
  "ruleType": z.enum(["OUTBOUND","STOCKTAKE"]),
  "splitCondition": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `splitCondition` to the tool, first call the tool `expandSchema` with \"/properties/splitCondition\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "queryConditions": z.array(z.object({ "queryType": z.enum(["WAREHOUSE_AREA","CUSTOMER_ORDER_TYPE","ORIG_PLATFORM"]), "filterValue": z.string() })).optional(),
  "sortConditions": z.array(z.object({ "sortType": z.enum(["CATEGORY_L1","STYLE","SIZE"]), "priority": z.number().int().optional() })).optional(),
  "enable": z.boolean().optional()
}