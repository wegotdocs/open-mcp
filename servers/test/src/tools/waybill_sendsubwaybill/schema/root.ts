import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "waybillId": z.number().optional(),
  "ignore_waybill": z.boolean().optional(),
  "object_id": z.number(),
  "operation_id": z.number().int().optional(),
  "from_account_id": z.number(),
  "fullAmount": z.number(),
  "par_id": z.number(),
  "startAddress": z.string().describe("parent id"),
  "endAddress": z.string(),
  "transId": z.enum(["1","2","3","4","6","7","8"]),
  "tranCostPayer": z.enum(["1","2"]),
  "driverName": z.string().optional(),
  "driverTin": z.number().optional(),
  "carNumber": z.string().optional(),
  "transTxt": z.string().optional(),
  "buyerTin": z.number().optional(),
  "checkBuyerTin": z.number().optional(),
  "buyerName": z.string().optional(),
  "transportCoast": z.number(),
  "isMed": z.boolean(),
  "document": z.string().optional(),
  "description": z.string().optional(),
  "goodList": z.array(z.object({ "id": z.number().optional(), "wName": z.string(), "unitId": z.number(), "unitTxt": z.string(), "quantity": z.number(), "price": z.number(), "status": z.number(), "amount": z.number(), "barcode": z.string(), "aId": z.number(), "vatType": z.number(), "quantityExt": z.string().optional(), "woodLabel": z.string().optional() })).optional()
}