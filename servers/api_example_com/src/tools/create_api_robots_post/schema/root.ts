import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "serial_number": z.string(),
  "robot_type": z.enum(["LIZARD","QUBE"]),
  "organization_id": z.number().int(),
  "dealers_ids": z.union([z.array(z.number().int()), z.null()]).optional(),
  "users_ids": z.union([z.array(z.number().int()), z.null()]).optional(),
  "software_version": z.union([z.number(), z.null()]).optional()
}