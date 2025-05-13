import { z } from "zod"

export const inputParamsSchema = {
  "locationIds": z.array(z.number().int()),
  "warehouseLogicId": z.number().int(),
  "heat": z.string(),
  "locationStatus": z.enum(["PUT_AWAY_ONLY","TAKE_OFF_ONLY","PUT_AWAY_PUT_DOWN","NONE"])
}