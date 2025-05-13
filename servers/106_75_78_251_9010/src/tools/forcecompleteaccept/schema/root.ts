import { z } from "zod"

export const inputParamsSchema = {
  "inboundPlanOrderId": z.number().int()
}