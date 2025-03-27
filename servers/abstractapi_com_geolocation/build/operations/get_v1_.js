import { z } from "zod";
export const toolName = `get_v1_`;
export const toolDescription = `Retrieve the location of an IP address`;
export const baseUrl = `https://ipgeolocation.abstractapi.com`;
export const path = `/v1/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "ip_address": z.string().optional(), "fields": z.string().optional() }).optional() }).shape;
