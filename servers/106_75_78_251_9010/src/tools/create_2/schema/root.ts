import { z } from "zod"

export const inputParamsSchema = {
  "warehouseCode": z.string(),
  "warehouseAreaId": z.number().int(),
  "locationType": z.literal("RACK"),
  "locationDescList": z.array(z.object({ "warehouseAreaGroupCode": z.string().optional(), "warehouseAreaCode": z.string().optional(), "aisleCode": z.string(), "shelfLine": z.string(), "warehouseLogicId": z.number().int(), "containerSpecCode": z.string(), "shelfNumber": z.number().int().gte(1), "singleEntrance": z.boolean().optional() }))
}