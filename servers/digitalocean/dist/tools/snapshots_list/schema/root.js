import { z } from "zod";
export const inputParams = {
    "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
    "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
    "resource_type": z.enum(["droplet", "volume"]).describe("Used to filter snapshots by a resource type.").optional()
};
