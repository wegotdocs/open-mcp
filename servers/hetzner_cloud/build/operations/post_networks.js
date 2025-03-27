import { z } from "zod";
export const toolName = `post_networks`;
export const toolDescription = `Create a Network`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/networks`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
