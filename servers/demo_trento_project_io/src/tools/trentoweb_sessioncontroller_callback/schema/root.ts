import { z } from "zod"

export const inputParamsSchema = {
  "provider": z.string(),
  "code": z.string(),
  "session_state": z.string()
}