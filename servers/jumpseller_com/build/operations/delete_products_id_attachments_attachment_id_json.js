import { z } from "zod";
export const toolName = `delete_products_id_attachments_attachment_id_json`;
export const toolDescription = `Delete a Product Attachment.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/products/{id}/attachments/{attachment_id}.json`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Product"), "attachment_id": z.number().int().describe("Id of the Product Attachment") }).optional() }).shape;
