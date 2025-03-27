import { z } from "zod";
export const toolName = `post_servers`;
export const toolDescription = `Create a Server`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/servers`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
