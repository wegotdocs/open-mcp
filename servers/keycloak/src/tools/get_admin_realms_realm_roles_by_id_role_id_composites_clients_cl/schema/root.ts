import { z } from "zod"

export const inputParamsSchema = {
  "clientUuid": z.string(),
  "role-id": z.string()
}