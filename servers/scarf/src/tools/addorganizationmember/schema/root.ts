import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string(),
  "role": z.enum(["admin","member","owner"])
}