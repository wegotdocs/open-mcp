import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().describe("To disable the whole module").optional(),
  "interval": z.string()
}