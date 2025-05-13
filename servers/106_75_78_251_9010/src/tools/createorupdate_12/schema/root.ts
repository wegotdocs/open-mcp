import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "warehouseAreaCode": z.string(),
  "warehouseCode": z.string(),
  "warehouseAreaName": z.string(),
  "warehouseGroupCode": z.string(),
  "warehouseAreaType": z.enum(["STORAGE_AREA","STORAGE_CACHE","PICKING_STORAGE_CACHE","ABNORMAL_AREA"]),
  "warehouseAreaWorkType": z.enum(["MANUAL","ROBOT"]),
  "warehouseAreaUse": z.enum(["RECEIVE","PUT_AWAY_HOLDER","PICK"]),
  "level": z.number().int().optional(),
  "temperatureLimit": z.number().int().optional(),
  "wetLimit": z.number().int().optional(),
  "deleted": z.boolean().optional(),
  "enable": z.boolean().optional(),
  "remark": z.string().optional(),
  "version": z.number().int().optional()
}