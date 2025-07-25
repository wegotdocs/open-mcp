import { z } from "zod"

export const inputParamsSchema = {
  "type": z.array(z.enum(["docker","file","python","npm","hackage","repository-jvm"])).optional(),
  "permission": z.enum(["member","admin","owner"]).optional(),
  "after": z.string().optional(),
  "per_page": z.number().int().optional()
}