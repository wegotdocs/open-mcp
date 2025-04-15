import { z } from "zod"

export const inputParamsSchema = {
  "inbound_transfer": z.string().max(5000)
}