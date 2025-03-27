import { z } from "zod";
export const toolName = `scheduleapitriggeredcanvases`;
export const toolDescription = `Schedule API Triggered Canvases`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/canvas/trigger/schedule/create`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
