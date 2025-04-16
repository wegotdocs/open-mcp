import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "renameMovies": z.boolean().optional(),
  "replaceIllegalCharacters": z.boolean().optional(),
  "colonReplacementFormat": z.enum(["delete","dash","spaceDash","spaceDashSpace","smart"]).optional(),
  "standardMovieFormat": z.string().nullable().optional(),
  "movieFolderFormat": z.string().nullable().optional()
}