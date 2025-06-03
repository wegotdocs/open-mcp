import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().optional(),
  "type_of_register": z.enum(["INITIATIVE","USER"]).optional(),
  "service_id": z.string().optional(),
  "manager_helped_id": z.string().optional(),
  "sub_item_id": z.string().optional()
}