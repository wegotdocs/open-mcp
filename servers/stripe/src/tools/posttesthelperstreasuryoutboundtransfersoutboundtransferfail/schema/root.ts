import { z } from "zod"

export const inputParamsSchema = {
  "outbound_transfer": z.string().max(5000)
}