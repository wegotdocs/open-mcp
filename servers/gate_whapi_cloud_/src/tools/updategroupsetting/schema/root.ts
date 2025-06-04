import { z } from "zod"

export const inputParamsSchema = {
  "GroupID": z.string().regex(new RegExp("^[\\d-]{10,31}@g\\.us$")).describe("Group ID"),
  "setting": z.enum(["send_messages","edit_group_info","approve_participants","add_participants"]),
  "policy": z.enum(["anyone","admins"])
}