import { z } from "zod"

export const inputParamsSchema = {
  "robot_id": z.number().int(),
  "name": z.union([z.string(), z.null()]).optional(),
  "serial_number": z.union([z.string(), z.null()]).optional(),
  "robot_type": z.union([z.enum(["LIZARD","QUBE"]), z.null()]).optional(),
  "organization_id": z.union([z.number().int(), z.null()]).optional(),
  "dealers_ids": z.union([z.array(z.number().int()), z.null()]).optional(),
  "users_ids": z.union([z.array(z.number().int()), z.null()]).optional(),
  "software_version": z.union([z.number(), z.null()]).optional()
}