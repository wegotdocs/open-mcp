import { z } from "zod"

export const inputParamsSchema = {
  "domainEventId": z.number().int()
}