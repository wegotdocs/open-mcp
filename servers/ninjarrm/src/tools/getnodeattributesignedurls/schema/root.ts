import { z } from "zod"

export const inputParamsSchema = {
  "entityType": z.enum(["NODE","LOCATION","ORGANIZATION"]),
  "entityId": z.number().int()
}