import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "serviceId": z.string().describe("Service identifier"),
  "startType": z.enum(["AUTO_START","AUTO_START_DELAYED","BOOT_START","DEMAND_START","DISABLED","SYSTEM_START"]).describe("Start Type").optional(),
  "userName": z.string().describe("Username").optional()
}