import { z } from "zod";
export const toolName = `post_firewalls`;
export const toolDescription = `Create a Firewall`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/firewalls`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
