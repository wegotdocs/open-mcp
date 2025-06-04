import { z } from "zod"

export const inputParamsSchema = {
  "CommunityID": z.string().regex(new RegExp("^[\\d-]{10,31}@g\\.us$")).describe("Group ID"),
  "setting": z.enum(["modify_groups","member_add_mode"]),
  "policy": z.enum(["anyone","admins"])
}