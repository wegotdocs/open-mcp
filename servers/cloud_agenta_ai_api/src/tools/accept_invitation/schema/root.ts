import { z } from "zod"

export const inputParams = {
  "org_id": z.string(),
  "workspace_id": z.string(),
  "project_id": z.string(),
  "token": z.string(),
  "email": z.string()
}