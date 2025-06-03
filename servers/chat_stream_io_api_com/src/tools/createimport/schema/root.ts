import { z } from "zod"

export const inputParamsSchema = {
  "mode": z.enum(["insert","upsert"]),
  "path": z.string()
}