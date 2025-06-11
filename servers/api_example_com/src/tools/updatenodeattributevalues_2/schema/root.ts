import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "locationId": z.number().int()
}