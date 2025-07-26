import { z } from "zod"

export const inputParamsSchema = {
  "files": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "blank": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "comment": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "code": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "language": z.number().int(),
  "product": z.number().int(),
  "user": z.number().int().nullable().optional()
}