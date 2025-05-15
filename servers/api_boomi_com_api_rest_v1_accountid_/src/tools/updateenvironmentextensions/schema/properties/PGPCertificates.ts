import { z } from "zod"

export const inputParamsSchema = {
  "PGPCertificate": z.array(z.object({ "id": z.string().optional(), "useDefault": z.boolean().optional(), "value": z.string().optional() })).optional()
}