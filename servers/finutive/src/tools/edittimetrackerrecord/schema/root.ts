import { z } from "zod"

export const inputParamsSchema = {
  "id_edit": z.string().describe("ID of the record to edit"),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "end_date": z.string().datetime({ offset: true }).optional(),
  "manager_id": z.string().optional(),
  "business_id": z.string().optional(),
  "service_id": z.string().optional(),
  "type_of_register": z.enum(["INITIATIVE","USER"]).optional(),
  "manager_helped_id": z.string().optional(),
  "is_edited": z.boolean().optional(),
  "reason_edited": z.string().optional(),
  "delete": z.boolean().optional(),
  "sub_item_id": z.string().optional()
}