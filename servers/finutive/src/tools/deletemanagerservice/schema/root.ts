import { z } from "zod"

export const inputParamsSchema = {
  "service_id": z.string().describe("Service identifier"),
  "manager_id": z.string().describe("Manager identifier")
}