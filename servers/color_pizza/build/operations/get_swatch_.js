import { z } from "zod";
export const toolName = `get_swatch_`;
export const toolDescription = `Generate a color swatch for any color`;
export const baseUrl = `https://api.color.pizza/v1`;
export const path = `/swatch/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "color": z.string().describe("The hex value of the color to retrieve without '#'"), "name": z.string().describe("The name of the color").optional() }).optional() }).shape;
