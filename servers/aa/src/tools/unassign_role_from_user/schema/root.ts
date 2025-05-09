import { z } from "zod"

export const inputParamsSchema = {
  "workspace_id": z.string(),
  "email": z.string(),
  "org_id": z.string(),
  "role": z.string()
}