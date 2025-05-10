import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().min(1).max(512).describe("Key that uniquely identifies this blob")
}