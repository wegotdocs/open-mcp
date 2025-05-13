import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "code": z.string(),
  "name": z.string(),
  "executeTime": z.enum(["SCAN_CONTAINER","SCAN_SKU","SCAN_SN"]),
  "businessFlow": z.enum(["INBOUND","OUTBOUND","STOCK_TAKE"]),
  "ownerCode": z.string().optional(),
  "brand": z.string().optional(),
  "enable": z.boolean().optional(),
  "unionLocation": z.enum(["LEFT","RIGHT"]).optional(),
  "unionStr": z.string().optional(),
  "regularExpression": z.string().optional(),
  "resultFields": z.array(z.string()),
  "version": z.number().int().optional()
}