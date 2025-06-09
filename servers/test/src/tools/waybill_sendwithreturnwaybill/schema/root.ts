import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "waybillId": z.number().optional(),
  "operation_id": z.number().int().optional(),
  "object_id": z.number().optional(),
  "fullAmount": z.number(),
  "startAddress": z.string(),
  "currency": z.number(),
  "endAddress": z.string(),
  "transId": z.enum(["1","2","3","4","6","7","8"]),
  "tranCostPayer": z.enum(["1","2"]),
  "driverName": z.string().optional(),
  "driverTin": z.number().optional(),
  "carNumber": z.string().optional(),
  "transTxt": z.string().optional(),
  "document": z.string().optional(),
  "description": z.string().optional(),
  "buyerTin": z.number().optional(),
  "checkBuyerTin": z.number().optional(),
  "buyerName": z.string().optional(),
  "transportCoast": z.number(),
  "isMed": z.boolean(),
  "checkDriverTin": z.number().optional(),
  "goodList": z.array(z.object({ "id": z.number().optional(), "wName": z.string(), "unitId": z.number(), "unitTxt": z.string(), "quantity": z.number(), "price": z.number(), "status": z.number(), "amount": z.number(), "barcode": z.string(), "aId": z.number(), "vatType": z.number(), "quantityExt": z.string().optional(), "woodLabel": z.string().optional() })).optional()
}