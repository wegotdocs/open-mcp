import { z } from "zod"

export const inputParamsSchema = {
  "algorithm": z.string().min(1).max(128).optional(),
  "stores": z.array(z.object({ "data": z.string().optional(), "filePath": z.string().optional(), "isFileOnClasspath": z.boolean(), "password": z.string().optional(), "type": z.string() })).optional()
}