import { z } from "zod"

export const toolName = `put_images_id_`
export const toolDescription = `Update an Image`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/images/{id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Image") }).optional() }).shape