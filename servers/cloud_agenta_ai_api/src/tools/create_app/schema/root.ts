import { z } from "zod"

export const inputParams = {
  "app_name": z.string(),
  "template_key": z.union([z.string(), z.null()]).optional(),
  "project_id": z.union([z.string(), z.null()]).optional(),
  "workspace_id": z.union([z.string(), z.null()]).optional(),
  "organization_id": z.union([z.string(), z.null()]).optional()
}