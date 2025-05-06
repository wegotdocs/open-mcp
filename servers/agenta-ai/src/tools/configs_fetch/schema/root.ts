import { z } from "zod"

export const inputParamsSchema = {
  "variant_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]).optional() }), z.null()]).optional(),
  "environment_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]).optional() }), z.null()]).optional(),
  "application_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]).optional() }), z.null()]).optional()
}