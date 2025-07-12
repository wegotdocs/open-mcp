import { z } from "zod"

export const inputParamsSchema = {
  "network_id": z.number().int(),
  "name": z.union([z.string(), z.null()]),
  "label": z.union([z.string(), z.null()])
}