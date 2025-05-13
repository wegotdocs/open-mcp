import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "warehouseAreaGroupCode": z.string(),
  "warehouseAreaGroupName": z.string(),
  "remark": z.string().optional(),
  "warehouseCode": z.string(),
  "deleted": z.boolean().optional(),
  "enable": z.boolean().optional(),
  "version": z.number().int().optional()
}