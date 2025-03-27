import { z } from "zod";
export const toolName = `post_delivery_pools`;
export const toolDescription = `Create a new delivery pool`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/delivery/pools`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "name": z.string().describe("The name of the pool, used by operations teams, in reports, etc."), "restaurants": z.array(z.number()).describe("A list of Just Eat restaurant ids served by the delivery pool.").optional() }).optional() }).shape;
