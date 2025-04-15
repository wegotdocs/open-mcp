import { z } from "zod"

export const inputParams = {
  "workspace_id": z.string(),
  "email": z.string(),
  "organization_id": z.string(),
  "role": z.union([z.string(), z.null()]).optional()
}