import { z } from "zod"

export const inputParamsSchema = {
  "offline_only": z.boolean().optional(),
  "version": z.enum(["v1","v2","v3"])
}