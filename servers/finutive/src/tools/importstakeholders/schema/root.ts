import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "type": z.enum(["CLIENT","PROVIDER","TPV"])
}