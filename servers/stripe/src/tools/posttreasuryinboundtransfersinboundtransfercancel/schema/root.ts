import { z } from "zod"

export const inputParams = {
  "inbound_transfer": z.string().max(5000)
}