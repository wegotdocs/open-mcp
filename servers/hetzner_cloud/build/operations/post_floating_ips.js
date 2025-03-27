import { z } from "zod";
export const toolName = `post_floating_ips`;
export const toolDescription = `Create a Floating IP`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/floating_ips`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
