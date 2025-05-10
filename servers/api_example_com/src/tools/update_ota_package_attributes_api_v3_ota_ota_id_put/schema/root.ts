import { z } from "zod"

export const inputParamsSchema = {
  "ota_id": z.number().int().describe("OTA 包 ID。"),
  "session_id": z.string().optional(),
  "os_type_id": z.union([z.number().int(), z.null()]).optional(),
  "package_name": z.union([z.string(), z.null()]).optional(),
  "version_code": z.union([z.number().int(), z.null()]).optional(),
  "version_name": z.union([z.string(), z.null()]).optional(),
  "flavor": z.union([z.string(), z.null()]).optional(),
  "dependency_list": z.union([z.array(z.record(z.any())), z.null()]).optional()
}