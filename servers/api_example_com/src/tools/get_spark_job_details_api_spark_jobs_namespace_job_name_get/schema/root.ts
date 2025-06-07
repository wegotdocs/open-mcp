import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "job_name": z.string()
}