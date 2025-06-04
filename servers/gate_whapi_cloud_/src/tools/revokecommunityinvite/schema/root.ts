import { z } from "zod"

export const inputParamsSchema = {
  "CommunityID": z.string().regex(new RegExp("^[\\d-]{10,31}@g\\.us$")).describe("Group ID")
}