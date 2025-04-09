import { z } from "zod"

export const inputParams = {
  "promptId": z.string(),
  "versionId": z.string().uuid()
}