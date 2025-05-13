import { z } from "zod"

export const inputParamsSchema = {
  "warehouseCode": z.string(),
  "containerSpecCode": z.string(),
  "warehouseAreaId": z.number().int(),
  "emptySlotNum": z.number().int().optional(),
  "warehouseLogicCode": z.string().optional(),
  "planCount": z.number().int().gte(1).optional(),
  "workStationId": z.number().int(),
  "containerStatus": z.enum(["IN_SIDE","OUT_SIDE"]).optional(),
  "emptyContainer": z.boolean().optional(),
  "locked": z.boolean().optional(),
  "perPage": z.number().int().optional()
}