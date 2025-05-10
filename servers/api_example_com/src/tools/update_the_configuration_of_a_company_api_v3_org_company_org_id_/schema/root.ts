import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.number().int(),
  "session_id": z.string().optional(),
  "smtp": z.union([z.object({ "host": z.union([z.string(), z.null()]).optional(), "port": z.union([z.number().int(), z.null()]).optional(), "secure": z.union([z.boolean(), z.null()]).optional(), "username": z.union([z.string(), z.null()]).optional(), "password": z.union([z.string(), z.null()]).optional() }), z.null()]).optional(),
  "dev_offline_noti_grace_period_mins": z.union([z.number().int(), z.null()]).optional(),
  "task_overdue_mins": z.union([z.number().int(), z.null()]).optional(),
  "task_review_required": z.union([z.boolean(), z.null()]).optional(),
  "task_end_noti_enabled": z.union([z.boolean(), z.null()]).optional(),
  "task_overdue_cancel_enabled": z.union([z.boolean(), z.null()]).optional(),
  "task_review_noti_enabled": z.union([z.boolean(), z.null()]).optional(),
  "task_overdue_noti_enabled": z.union([z.boolean(), z.null()]).optional()
}