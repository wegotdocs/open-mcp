import { z } from "zod"

export const inputParamsSchema = {
  "workspace_id": z.string().describe("ID or slug of the workspace").optional(),
  "name": z.string().describe("Name of the collection"),
  "parent_collection_id": z.string().describe("ID or slug of the parent collection (optional)").optional()
}