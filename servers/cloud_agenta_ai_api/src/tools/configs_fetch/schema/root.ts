import { z } from "zod"

export const inputParams = {
  "variant_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]), "version": z.union([z.number().int(), z.null()]), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional(),
  "environment_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]), "version": z.union([z.number().int(), z.null()]), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional(),
  "application_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]), "version": z.union([z.number().int(), z.null()]), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional()
}