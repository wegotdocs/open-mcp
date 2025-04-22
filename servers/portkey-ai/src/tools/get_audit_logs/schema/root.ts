import { z } from "zod"

export const inputParamsSchema = {
  "start_time": z.string().describe("Start time for filtering logs (ISO8601 format)"),
  "end_time": z.string().describe("End time for filtering logs (ISO8601 format)"),
  "organisation_id": z.string().describe("Organisation ID for filtering logs"),
  "method": z.enum(["POST","PUT","DELETE"]).describe("HTTP method for filtering logs").optional(),
  "uri": z.string().describe("URI path for filtering logs").optional(),
  "request_id": z.string().describe("Request ID for filtering logs").optional(),
  "user_id": z.string().describe("User ID for filtering logs").optional(),
  "user_type": z.enum(["user","api_key"]).describe("Type of user for filtering logs").optional(),
  "workspace_id": z.string().describe("Workspace ID for filtering logs").optional(),
  "response_status_code": z.number().int().describe("HTTP response status code for filtering logs").optional(),
  "resource_type": z.string().describe("Resource type for filtering logs").optional(),
  "action": z.string().describe("Action type for filtering logs").optional(),
  "client_ip": z.string().describe("Client IP address for filtering logs").optional(),
  "country": z.string().describe("Country for filtering logs").optional(),
  "current_page": z.number().int().gte(0).describe("Current page number for pagination").optional(),
  "page_size": z.number().int().gte(0).lte(100).describe("Number of items per page").optional()
}