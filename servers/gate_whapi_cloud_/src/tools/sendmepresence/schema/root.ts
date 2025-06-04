import { z } from "zod"

export const inputParamsSchema = {
  "presence": z.enum(["online","offline"])
}