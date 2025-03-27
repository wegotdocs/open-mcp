import { z } from "zod";
export const toolName = `get_floating_ips`;
export const toolDescription = `Get all Floating IPs`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/floating_ips`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "name": z.string().describe("Can be used to filter Floating IPs by their name. The response will only contain the Floating IP matching the specified name.").optional(), "label_selector": z.string().describe("Can be used to filter Floating IPs by labels. The response will only contain Floating IPs matching the label selector.").optional(), "sort": z.enum(["id", "id:asc", "id:desc", "created", "created:asc", "created:desc"]).describe("Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc").optional() }).optional() }).shape;
