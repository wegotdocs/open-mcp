import { z } from "zod";
export const toolName = `post_placement_groups`;
export const toolDescription = `Create a PlacementGroup`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/placement_groups`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
