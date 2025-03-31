import { z } from "zod"

export const toolName = `delete_admin_realms_realm_authentication_executions_executionid_`
export const toolDescription = `Delete execution`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/executions/{executionId}`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "executionId": z.string().describe("Execution id") }).optional() }).shape