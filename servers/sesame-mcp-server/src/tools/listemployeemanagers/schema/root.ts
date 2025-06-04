import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("Find employee managers by employeeId").optional(),
  "managerId": z.string().uuid().describe("Find employee managers by managerId").optional(),
  "permission": z.enum(["absencesManagement","checksManageRequestsAndIncidences"]).describe("Filter employee managers by permission type. <b>Supported operators:</b> in. <b>Note:</b> If an invalid permission value is provided, the filter will be ignored and all results will be returned (same behavior as not providing the parameter).").optional(),
  "limit": z.number().int().describe("Limit departments").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}