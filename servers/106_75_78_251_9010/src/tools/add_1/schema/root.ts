import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "name": z.string().min(0).max(64),
  "code": z.string().min(0).max(32),
  "status": z.number().int(),
  "description": z.string().min(0).max(128).optional(),
  "warehouseCodes": z.array(z.string())
}