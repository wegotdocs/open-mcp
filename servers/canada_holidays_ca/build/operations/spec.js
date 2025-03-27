import { z } from "zod";
export const toolName = `spec`;
export const toolDescription = `Get JSON schema`;
export const baseUrl = `https://canada-holidays.ca`;
export const path = `/api/v1/spec`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
