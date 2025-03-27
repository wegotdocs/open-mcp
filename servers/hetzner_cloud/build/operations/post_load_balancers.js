import { z } from "zod";
export const toolName = `post_load_balancers`;
export const toolDescription = `Create a Load Balancer`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/load_balancers`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
