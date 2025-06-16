import { z } from "zod"

export const inputParamsSchema = {
  "inputs": z.array(z.any().describe("A document hosted in the registry")).optional(),
  "overlays": z.array(z.any().describe("A document hosted in the registry")).optional(),
  "output": z.any().describe("A document hosted in the registry").optional()
}