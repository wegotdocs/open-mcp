import { z } from "zod";
export const toolName = `post_customer_categories_id_customers_json`;
export const toolDescription = `Adds Customers to a CustomerCategory.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/customer_categories/{id}/customers.json`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the CustomerCategory") }).optional(), "body": z.object({ "customers": z.array(z.object({ "email": z.string().describe("Email of the Customer").optional(), "id": z.number().int().describe("Unique identifier of the Customer").optional() })).optional() }).optional() }).shape;
