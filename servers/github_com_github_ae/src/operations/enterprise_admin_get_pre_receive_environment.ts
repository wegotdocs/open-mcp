import { z } from "zod"

export const toolName = `enterprise_admin_get_pre_receive_environment`
export const toolDescription = `Get a pre-receive environment`
export const baseUrl = `https://github.com`
export const path = `/admin/pre-receive-environments/{pre_receive_environment_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "pre_receive_environment_id": z.number().int().describe("The unique identifier of the pre-receive environment.") }).optional() }).shape