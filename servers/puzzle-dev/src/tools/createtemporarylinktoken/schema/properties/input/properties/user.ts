import { z } from "zod"

export const inputParams = {
  "id": z.string().optional(),
  "email": z.string(),
  "name": z.string()
}