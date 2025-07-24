import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string(),
  "permission_level": z.enum(["member","admin","owner"])
}