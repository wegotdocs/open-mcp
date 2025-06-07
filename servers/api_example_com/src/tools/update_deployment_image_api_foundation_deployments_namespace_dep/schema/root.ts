import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "deployment_name": z.string()
}