import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "secret_name": z.string()
}