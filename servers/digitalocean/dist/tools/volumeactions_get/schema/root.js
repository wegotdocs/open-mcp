import { z } from "zod";
export const inputParams = {
    "volume_id": z.string().uuid().describe("The ID of the block storage volume."),
    "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action."),
    "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
    "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
};
