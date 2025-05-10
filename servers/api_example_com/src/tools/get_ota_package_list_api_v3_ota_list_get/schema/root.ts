import { z } from "zod"

export const inputParamsSchema = {
  "os_type_id": z.union([z.number().int(), z.null()]).optional(),
  "package_name": z.union([z.string(), z.null()]).optional(),
  "version_code": z.union([z.number().int(), z.null()]).optional(),
  "version_name": z.union([z.string(), z.null()]).optional(),
  "flavor": z.union([z.string(), z.null()]).optional(),
  "session_id": z.string().optional()
}