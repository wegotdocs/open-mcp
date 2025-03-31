import { z } from "zod"

export const toolName = `get_admin_realms_realm_authentication_flows_flowalias_executions`
export const toolDescription = `Get authentication executions for a flow`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows/{flowAlias}/executions`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "flowAlias": z.string().describe("Flow alias") }).optional() }).shape