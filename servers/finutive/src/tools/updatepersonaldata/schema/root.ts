import { z } from "zod"

export const inputParamsSchema = {
  "firstName": z.string().optional(),
  "lastName": z.string().optional(),
  "phone": z.string().optional(),
  "language": z.string().optional(),
  "role": z.string().optional(),
  "avatar": z.string().optional()
}