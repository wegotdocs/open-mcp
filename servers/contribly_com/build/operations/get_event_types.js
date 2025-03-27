import { z } from "zod";
export const toolName = `get_event_types`;
export const toolDescription = `Event types`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/event-types`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
