import { z } from "zod"

export const inputParams = {
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "flow_id": z.string().describe("流程id").optional()
}