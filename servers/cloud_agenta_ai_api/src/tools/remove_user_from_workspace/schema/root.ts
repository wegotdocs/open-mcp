import { z } from "zod"

export const inputParams = {
  "workspace_id": z.string(),
  "email": z.string()
}