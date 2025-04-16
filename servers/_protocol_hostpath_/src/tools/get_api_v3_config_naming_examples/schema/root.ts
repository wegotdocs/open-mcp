import { z } from "zod"

export const inputParamsSchema = {
  "renameMovies": z.boolean().optional(),
  "replaceIllegalCharacters": z.boolean().optional(),
  "colonReplacementFormat": z.enum(["delete","dash","spaceDash","spaceDashSpace","smart"]).optional(),
  "standardMovieFormat": z.string().optional(),
  "movieFolderFormat": z.string().optional(),
  "id": z.number().int().optional(),
  "resourceName": z.string().optional()
}