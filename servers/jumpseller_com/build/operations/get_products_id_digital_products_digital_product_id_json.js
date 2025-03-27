import { z } from "zod";
export const toolName = `get_products_id_digital_products_digital_product_id_json`;
export const toolDescription = `Retrieve a single Product DigitalProduct.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/products/{id}/digital_products/{digital_product_id}.json`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Product"), "digital_product_id": z.number().int().describe("Id of the Product DigitalProduct") }).optional() }).shape;
