import { z } from "zod";
export const toolName = `get_placement_groups`;
export const toolDescription = `Get all PlacementGroups`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/placement_groups`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "sort": z.enum(["id", "id:asc", "id:desc", "name", "name:asc", "name:desc", "created", "created:asc", "created:desc"]).describe("Can be used multiple times.").optional(), "name": z.string().describe("Can be used to filter resources by their name. The response will only contain the resources matching the specified name").optional(), "label_selector": z.string().describe("Can be used to filter resources by labels. The response will only contain resources matching the label selector.").optional(), "type": z.literal("spread").describe("Can be used multiple times. The response will only contain PlacementGroups matching the type.").optional() }).optional() }).shape;
