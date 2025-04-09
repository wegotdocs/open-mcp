import { z } from "zod";
export const inputParams = {
    "type": z.enum(["application", "distribution"]).describe("Filters results based on image type which can be either `application` or `distribution`.").optional(),
    "private": z.boolean().describe("Used to filter only user images.").optional(),
    "tag_name": z.string().describe("Used to filter images by a specific tag.").optional(),
    "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
    "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
};
