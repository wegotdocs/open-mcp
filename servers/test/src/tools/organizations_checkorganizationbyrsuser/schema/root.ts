import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "rs_user": z.string()
}