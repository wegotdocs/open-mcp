import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "warehouseCode": z.string(),
  "containerSpecCode": z.string(),
  "containerSpecName": z.string(),
  "length": z.number().int().gte(1).optional(),
  "width": z.number().int().gte(1).optional(),
  "height": z.number().int().gte(1).optional(),
  "volume": z.number().int().gte(1).optional(),
  "location": z.string().optional(),
  "description": z.string().optional(),
  "containerType": z.enum(["CONTAINER","TRANSFER_CONTAINER","SHELF","PUT_WALL"]),
  "containerSlotSpecs": z.array(z.object({ "containerSlotSpecCode": z.string(), "face": z.string().optional(), "length": z.number().int().gte(1).optional(), "width": z.number().int().gte(1).optional(), "height": z.number().int().gte(1).optional(), "volume": z.number().int().gte(1).optional(), "level": z.number().int().gte(1), "bay": z.number().int().gte(1), "locLevel": z.number().int().gte(1), "locBay": z.number().int().gte(1) })),
  "version": z.number().int().optional(),
  "containerSlotNum": z.number().int().optional()
}