import { z } from "zod";
export const toolName = `canvasdataanalyticssummary`;
export const toolDescription = `Canvas Data Analytics Summary`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/canvas/data_summary`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "canvas_id": z.string().describe("(Required) String \n\nCanvas API identifier").optional(), "ending_at": z.string().describe("(Required) DateTime (ISO 8601 string)\n\nDate on which the data export should end - defaults to time of the request").optional(), "starting_at": z.string().describe("(Optional) DateTime (ISO 8601 string)\n\nDate on which the data export should begin (either length or starting_at required)").optional(), "length": z.string().describe("(Optional) Integer\n\nMax number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required)").optional(), "include_variant_breakdown": z.string().describe("(Optional) Boolean\n\nWhether or not to include variant stats (defaults to false)").optional(), "include_step_breakdown": z.string().describe("(Optional) Boolean\n\nWhether or not to include step stats (defaults to false)").optional(), "include_deleted_step_data": z.string().describe("(Optional) Boolean\n\nWhether or not to include step stats for deleted steps (defaults to false)").optional() }).optional() }).shape;
