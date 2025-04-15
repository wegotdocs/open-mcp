import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "workspace_id": z.string(),
  "email": z.string()
}