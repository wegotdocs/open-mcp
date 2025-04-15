import { z } from "zod"

export const inputParamsSchema = {
  "scopes": z.array(z.string())
}