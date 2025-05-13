import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "workStationId": z.number().int().optional(),
  "enablePutAwayRule": z.boolean().optional(),
  "enableSkuWeighing": z.boolean().optional(),
  "allowPutAwayOutside": z.boolean().optional(),
  "disableReceiving": z.boolean().optional(),
  "warehouseCode": z.string(),
  "version": z.number().int().optional()
}