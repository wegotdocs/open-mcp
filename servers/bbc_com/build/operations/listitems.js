import { z } from "zod";
export const toolName = `listitems`;
export const toolDescription = `Look inside programmes to find segments: chapters, tracks and more`;
export const baseUrl = `https://programmes.api.bbc.com`;
export const path = `/items`;
export const method = `get`;
export const security = [
    {
        "key": "api_key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api_key"
    }
];
export const inputParams = z.object({ "query": z.object({ "sort": z.literal("pid").describe("Sorts:\n* pid: sort by pid, descending\n").optional(), "sort_direction": z.literal("descending").describe("Sort direction").optional(), "mixin": z.array(z.enum(["contributions", "images", "offset", "play_event"])).describe("Mixins:\n* contributions: mixin to return information about contributors to items\n* images: mixin to add image information for an item\n* offset: mixin to return programme segment offsets, works in conjunction with programme filter\n* play_event: mixin to return programme segment events, works in conjunction with programme or segment_event filters\n").optional(), "authority": z.string().describe("filter for subset of items that have an ID issued by the given authority").optional(), "id": z.array(z.string()).describe("filter for subset of items having given ID").optional(), "id_type": z.string().describe("filter for subset of items that have given an ID of the given type").optional(), "item_type": z.array(z.enum(["chapter", "highlight", "music", "speech", "other"])).describe("filter for specific type(s) of items").optional(), "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "partner_id": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for items by partner ID").optional(), "partner_pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for items by partner PID").optional(), "people": z.string().describe("filter for subset of items that have specified person involved").optional(), "pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of items matching one of the given PIDs").optional(), "programme": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("filter for subset of items that are part of the given programme").optional(), "q": z.string().describe("filter for subset of items matching supplied keyword/phrase (boolean operators permitted)").optional(), "segment_event": z.string().describe("filter for item with the given segment_event").optional() }).optional() }).shape;
