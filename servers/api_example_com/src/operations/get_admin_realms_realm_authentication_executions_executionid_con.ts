import { z } from "zod"

export const toolName = `get_admin_realms_realm_authentication_executions_executionid_con`
export const toolDescription = `Get execution's configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/executions/{executionId}/config/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "executionId": z.string().describe("Execution id"), "id": z.string().describe("Configuration id") }).optional() }).shape