import { z } from "zod";
export const inputParams = {
    "workspace_id": z.string().describe("ID or slug of the workspace"),
    "current_page": z.number().int().gte(0).describe("Page number for pagination (0-indexed)").optional(),
    "page_size": z.number().int().gte(1).describe("Number of items per page").optional(),
    "search": z.string().describe("Search query to filter collections by name").optional()
};
