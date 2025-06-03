import { z } from "zod"

export const inputParamsSchema = {
  "manager_id": z.string().describe("Manager id"),
  "service_id": z.string().describe("Service id")
}