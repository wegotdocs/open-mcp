import { z } from "zod"

export const inputParamsSchema = {
  "client_report_id": z.string().nullable().describe("Client-generated identifier, which can be used by lenders to track loan applications.").optional()
}