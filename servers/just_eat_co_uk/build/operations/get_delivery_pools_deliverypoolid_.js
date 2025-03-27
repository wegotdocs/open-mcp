import { z } from "zod";
export const toolName = `get_delivery_pools_deliverypoolid_`;
export const toolDescription = `Get an individual delivery pool`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/delivery/pools/{deliveryPoolId}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
