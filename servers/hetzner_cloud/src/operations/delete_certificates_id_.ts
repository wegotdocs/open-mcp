import { z } from "zod"

export const toolName = `delete_certificates_id_`
export const toolDescription = `Delete a Certificate`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/certificates/{id}`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the resource") }).optional() }).shape