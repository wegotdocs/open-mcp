import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid(),
  "host_id": z.string().uuid(),
  "instance_number": z.string(),
  "operation": z.string()
}