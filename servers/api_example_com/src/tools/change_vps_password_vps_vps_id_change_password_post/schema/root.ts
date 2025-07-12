import { z } from "zod"

export const inputParamsSchema = {
  "vps_id": z.number().int(),
  "password": z.string().describe("New password must be at least 8 characters long.")
}