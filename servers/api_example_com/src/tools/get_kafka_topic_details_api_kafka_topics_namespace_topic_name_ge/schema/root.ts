import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "topic_name": z.string()
}