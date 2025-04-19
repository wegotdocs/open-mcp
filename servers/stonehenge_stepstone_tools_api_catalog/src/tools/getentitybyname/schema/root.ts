import { z } from "zod"

export const inputParamsSchema = {
  "kind": z.string(),
  "namespace": z.string(),
  "name": z.string()
}