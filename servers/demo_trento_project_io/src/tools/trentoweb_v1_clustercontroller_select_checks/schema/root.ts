import { z } from "zod"

export const inputParamsSchema = {
  "cluster_id": z.string().uuid(),
  "checks": z.array(z.string())
}