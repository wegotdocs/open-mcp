import { z } from "zod"

export const inputParamsSchema = {
  "participantId": z.string(),
  "businessId": z.string()
}