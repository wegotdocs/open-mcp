import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "extra_type": z.number().optional(),
  "operation_id": z.number().int().optional(),
  "driver_tin": z.string().optional(),
  "driver_name": z.string().optional(),
  "car_number": z.string().optional(),
  "start_address": z.string().optional(),
  "end_address": z.string().optional(),
  "transportation_cost": z.string().optional(),
  "organization_name": z.string().optional(),
  "tranCostPayer": z.string().optional(),
  "name": z.string().optional(),
  "from_account_id": z.number(),
  "transaction_type": z.enum(["0","1","2","3","4","5","6","7","8","9","10","11","12","13"]),
  "date": z.string().optional(),
  "document": z.string().optional(),
  "description": z.string().optional(),
  "vat": z.number(),
  "course": z.number(),
  "currency": z.number(),
  "object_id": z.number().optional(),
  "payment": z.array(z.string()).optional(),
  "products": z.array(z.object({ "barcode": z.string(), "unit_price": z.number(), "amount": z.number(), "unit_id": z.string(), "coefficient": z.number().optional(), "rs_barcode": z.string().optional(), "rs_product_name": z.string().optional() }))
}