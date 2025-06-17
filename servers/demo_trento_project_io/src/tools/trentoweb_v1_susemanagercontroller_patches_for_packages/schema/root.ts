import { z } from "zod"

export const inputParamsSchema = {
  "host_id": z.string().uuid()
}