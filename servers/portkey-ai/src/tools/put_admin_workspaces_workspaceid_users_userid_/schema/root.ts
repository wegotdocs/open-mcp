import { z } from "zod"

export const inputParams = {
  "workspaceId": z.string(),
  "userId": z.string(),
  "role": z.enum(["admin","member"]).optional()
}