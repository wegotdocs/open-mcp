import { z } from "zod"

export const inputParamsSchema = {
  "workspaceId": z.string(),
  "userId": z.string(),
  "role": z.enum(["admin","member"]).optional()
}