import { z } from "zod"

export const toolName = `get_server_types_id_`
export const toolDescription = `Get a Server Type`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/server_types/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of Server Type") }).optional() }).shape