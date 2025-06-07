import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "configmap_name": z.string()
}