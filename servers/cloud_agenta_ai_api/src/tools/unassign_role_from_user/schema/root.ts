import { z } from "zod"

export const inputParams = {
  "workspace_id": z.string(),
  "email": z.string(),
  "org_id": z.string(),
  "role": z.string()
}