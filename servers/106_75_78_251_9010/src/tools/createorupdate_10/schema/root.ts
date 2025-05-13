import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "warehouseLogicCode": z.string().optional(),
  "warehouseAreaId": z.string().optional(),
  "warehouseLogicName": z.string().optional(),
  "warehouseCode": z.string().optional(),
  "remark": z.string().optional(),
  "deleted": z.boolean().optional(),
  "deleteTime": z.number().int().optional(),
  "enable": z.boolean().optional(),
  "version": z.number().int().optional()
}