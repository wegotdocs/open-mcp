import { z } from "zod"

export const toolName = `post_admin_realms_realm_authentication_flows_flowalias_execution`
export const toolDescription = `Add new flow with new execution to existing flow`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows/{flowAlias}/executions/flow`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "flowAlias": z.string().describe("Alias of parent authentication flow") }).optional(), "body": z.record(z.any()).optional() }).shape