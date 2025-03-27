import { z } from "zod"

export const toolName = `post_products_id_attachments_json`
export const toolDescription = `Create a new Product Attachment.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/products/{id}/attachments.json`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Product") }).optional(), "body": z.object({ "attachment": z.object({ "filename": z.string().describe("Filename of the attachment (with file extensison)").optional(), "url": z.string().describe("Public accessible URL with the desired file contents. (LIMIT: 100MB)").optional() }).optional() }).optional() }).shape