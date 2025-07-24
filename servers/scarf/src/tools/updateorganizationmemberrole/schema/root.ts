import { z } from "zod"

export const inputParamsSchema = {
  "role": z.enum(["admin","member","owner"])
}