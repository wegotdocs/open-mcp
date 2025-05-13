import { z } from "zod"

export const inputParamsSchema = {
  "warehouseCode": z.string(),
  "containerType": z.enum(["CONTAINER","TRANSFER_CONTAINER","SHELF","PUT_WALL"]),
  "containerSpecCode": z.string(),
  "containerCodePrefix": z.string(),
  "startIndex": z.number().int().gte(1),
  "indexNumber": z.number().int().gte(1),
  "createNumber": z.number().int().gte(1),
  "endIndex": z.number().int().optional()
}