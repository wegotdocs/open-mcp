import { z } from "zod";
export const toolName = `listgroups`;
export const toolDescription = `Find metadata for curated groups: seasons, collections, galleries or franchises`;
export const baseUrl = `https://programmes.api.bbc.com`;
export const path = `/groups`;
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
export const inputParams = z.object({ "query": z.object({ "sort": z.literal("pid").describe("Sorts:\n* pid: sort alphabetically by PID\n").optional(), "sort_direction": z.literal("descending").describe("Sort direction").optional(), "mixin": z.array(z.enum(["alternate_images", "group_for", "images", "related_links"])).describe("Mixins:\n* alternate_images: mixin to return the alternate images for a group\n* group_for: mixin to return links to programme entities that group belongs to\n* images: mixin to add image information for a group\n* related_links: mixin to return related links for the group\n").optional(), "for_descendants_of": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("filter for groups related to given programme or its descendants").optional(), "for_programme": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("filter for subset of groups directly related to a given programme").optional(), "group": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("filter for subset of groups which belong to the given group pid").optional(), "group_type": z.array(z.enum(["collection", "franchise", "gallery", "season"])).describe("filter for subset of groups that have the given group type").optional(), "member": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("filter for subset of groups which contain an entity with the given pid as a member").optional(), "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "partner_id": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for groups by partner ID").optional(), "partner_pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for groups by partner PID").optional(), "pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of seasons, collections, galleries or franchises having given PID").optional(), "q": z.string().describe("filter for subset of groups matching supplied keyword/phrase (boolean operators permitted)").optional(), "embargoed": z.enum(["include", "exclude", "only"]).describe("Control return of embargoed items (undocumented)").optional() }).optional() }).shape;
