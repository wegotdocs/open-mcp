import { z } from "zod";
export const toolName = `segmentdetails`;
export const toolDescription = `Segment Details`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/segments/details`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "segment_id": z.string().describe("(Required) String\n\nSegment API identifier").optional() }).optional() }).shape;
