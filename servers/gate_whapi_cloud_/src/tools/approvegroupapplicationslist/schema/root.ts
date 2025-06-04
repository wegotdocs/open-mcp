import { z } from "zod"

export const inputParamsSchema = {
  "GroupID": z.string().regex(new RegExp("^[\\d-]{10,31}@g\\.us$")).describe("Group ID"),
  "application": z.string().regex(new RegExp("^[\\d-]{10,31}@[\\w\\.]{1,}$")).describe("Chat ID")
}