import { z } from "zod"

export const inputParamsSchema = {
  "authProfileId": z.union([z.null(), z.number().int()]).optional(),
  "authProfileName": z.union([z.null(), z.string()]).optional(),
  "type": z.string(),
  "url": z.string()
}