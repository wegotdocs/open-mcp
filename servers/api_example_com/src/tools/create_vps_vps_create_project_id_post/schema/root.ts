import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int(),
  "label": z.string(),
  "template_name": z.string(),
  "plan_name": z.string(),
  "location_name": z.string(),
  "name": z.string(),
  "ssh_key_name": z.union([z.string(), z.null()]).optional(),
  "network_id": z.union([z.number().int(), z.null()]).optional(),
  "user": z.union([z.string(), z.null()]).describe("Will default to 'root' if empty.").optional(),
  "password": z.union([z.string(), z.null()]).describe("If empty, no root password is set. Minimum 8 characters if provided.").optional()
}