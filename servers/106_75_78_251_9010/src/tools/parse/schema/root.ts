import { z } from "zod"

export const inputParamsSchema = {
  "barcode": z.string(),
  "ownerCode": z.string().optional(),
  "knownSkus": z.array(z.object({ "ownerCode": z.string(), "skuCode": z.string(), "brand": z.string() })).optional(),
  "businessFlow": z.enum(["INBOUND","OUTBOUND","STOCK_TAKE"]),
  "executeTime": z.enum(["SCAN_CONTAINER","SCAN_SKU","SCAN_SN"])
}