import { z } from "zod"

export const inputParamsSchema = {
  "deviceId": z.number().int().optional(),
  "planUid": z.string().uuid().optional()
}