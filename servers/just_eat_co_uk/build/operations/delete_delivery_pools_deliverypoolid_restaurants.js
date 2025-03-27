import { z } from "zod";
export const toolName = `delete_delivery_pools_deliverypoolid_restaurants`;
export const toolDescription = `Remove restaurants from a delivery pool`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/delivery/pools/{deliveryPoolId}/restaurants`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "restaurants": z.array(z.number()).describe("A list of Just Eat restaurant ids served by the delivery pool.").optional() }).optional() }).shape;
