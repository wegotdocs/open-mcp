import { z } from "zod";
export const toolName = `get_delivery_pools_deliverypoolid_availability_relative`;
export const toolDescription = `Get availability for pickup`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/delivery/pools/{deliveryPoolId}/availability/relative`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
