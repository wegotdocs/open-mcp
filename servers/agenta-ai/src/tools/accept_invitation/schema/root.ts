import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "workspace_id": z.string(),
  "project_id": z.string(),
  "token": z.string(),
  "email": z.string()
}