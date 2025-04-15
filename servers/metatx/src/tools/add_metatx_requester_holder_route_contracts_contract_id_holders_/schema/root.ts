import { z } from "zod"

export const inputParamsSchema = {
  "contract_id": z.string().uuid(),
  "holder_id": z.string().uuid(),
  "holder_type": z.enum(["user","group"]).describe("An enumeration."),
  "permissions": z.array(z.enum(["admin","create","read","update","delete"]).describe("An enumeration.")).optional()
}