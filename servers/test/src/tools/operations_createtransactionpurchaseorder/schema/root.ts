import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "from_account_id": z.number(),
  "transaction_type": z.enum(["0","1","2","3","4","5","6","7","8","9","10","11","12","13"]),
  "date": z.string().optional(),
  "document": z.string().optional(),
  "vat": z.number(),
  "course": z.number(),
  "currency": z.number(),
  "object_id": z.number(),
  "payment": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `payment` to the tool, first call the tool `expandSchema` with \"/properties/payment\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "products": z.array(z.object({ "barcode": z.string(), "unit_price": z.number(), "amount": z.number(), "unit_id": z.string(), "coefficient": z.number().optional(), "rs_barcode": z.string().optional(), "rs_product_name": z.string().optional() }))
}