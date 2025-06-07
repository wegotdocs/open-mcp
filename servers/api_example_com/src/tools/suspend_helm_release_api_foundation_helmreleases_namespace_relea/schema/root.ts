import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "release_name": z.string()
}