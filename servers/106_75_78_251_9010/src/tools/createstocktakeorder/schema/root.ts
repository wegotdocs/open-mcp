import { z } from "zod"

export const inputParamsSchema = {
  "warehouseCode": z.string(),
  "stocktakeType": z.enum(["ORDINARY","RANDOM","ACTIVE","DISCREPANCY_REVIEW"]),
  "stocktakeMethod": z.enum(["INFORMED","BLIND"]),
  "stocktakeCreateMethod": z.enum(["MANUAL","IMPORT","EXTERNAL_API"]),
  "stocktakeUnitType": z.enum(["SHELF","CONTAINER","SKU","STOCK"]),
  "includeZeroStock": z.boolean().optional(),
  "includeEmptySlot": z.boolean().optional(),
  "shelfCodes": z.array(z.string().describe("要盘点的货架列表")).describe("要盘点的货架列表").optional(),
  "shelfCodeFacePairs": z.array(z.string().describe("要盘点的货架面列表")).describe("要盘点的货架面列表").optional(),
  "containerCodes": z.array(z.string().describe("要盘点的容器列表")).describe("要盘点的容器列表").optional(),
  "skuIds": z.array(z.number().int().describe("要盘点的商品id列表")).describe("要盘点的商品id列表").optional(),
  "stockIds": z.array(z.number().int().describe("要盘点的库存id列表")).describe("要盘点的库存id列表").optional(),
  "warehouseAreaId": z.number().int(),
  "warehouseLogicId": z.number().int().optional(),
  "workStationId": z.number().int().optional()
}