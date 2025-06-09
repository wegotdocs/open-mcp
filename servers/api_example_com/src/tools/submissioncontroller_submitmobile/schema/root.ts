import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "tenantId": z.string().optional(),
  "ntx-tenancy": z.string().optional(),
  "ntx-upload-session-id": z.string().optional(),
  "ntx-captcha": z.string().optional(),
  "ntx-client": z.string().optional(),
  "ntx-correlation-id": z.string().optional(),
  "ntx-operation-id": z.string().optional(),
  "ntx-test-workflow": z.string(),
  "Authorization": z.string()
}