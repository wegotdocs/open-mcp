import { z } from "zod"

export const inputParams = {
  "workspaceId": z.string(),
  "users": z.array(z.object({ "id": z.string().uuid().optional(), "role": z.enum(["admin","member"]).optional() })).optional()
}