import { z } from "zod"

export const toolName = `post_admin_realms_realm_authentication_executions_executionid_co`
export const toolDescription = `Update execution with new configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/executions/{executionId}/config`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "executionId": z.string().describe("Execution id") }).optional(), "body": z.object({ "id": z.string().optional(), "alias": z.string().optional(), "config": z.record(z.string()).optional() }).optional() }).shape