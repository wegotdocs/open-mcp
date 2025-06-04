import { z } from "zod"

export const inputParamsSchema = {
  "ChatID": z.string().regex(new RegExp("^[\\d-]{10,31}@[\\w\\.]{1,}$")).describe("Chat ID")
}