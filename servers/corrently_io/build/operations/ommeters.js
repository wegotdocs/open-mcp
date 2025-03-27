import { z } from "zod";
export const toolName = `ommeters`;
export const toolDescription = `Public shared smart meters installed in Germany and available for subservices and exploration.`;
export const baseUrl = `https://api.corrently.io/v2.0`;
export const path = `/alternative/openmeter/meters`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
