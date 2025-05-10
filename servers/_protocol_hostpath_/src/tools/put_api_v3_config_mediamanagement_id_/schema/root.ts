import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "autoUnmonitorPreviouslyDownloadedMovies": z.boolean().optional(),
  "recycleBin": z.string().nullable().optional(),
  "recycleBinCleanupDays": z.number().int().optional(),
  "downloadPropersAndRepacks": z.enum(["preferAndUpgrade","doNotUpgrade","doNotPrefer"]).optional(),
  "createEmptyMovieFolders": z.boolean().optional(),
  "deleteEmptyFolders": z.boolean().optional(),
  "fileDate": z.enum(["none","cinemas","release"]).optional(),
  "rescanAfterRefresh": z.enum(["always","afterManual","never"]).optional(),
  "autoRenameFolders": z.boolean().optional(),
  "pathsDefaultStatic": z.boolean().optional(),
  "setPermissionsLinux": z.boolean().optional(),
  "chmodFolder": z.string().nullable().optional(),
  "chownGroup": z.string().nullable().optional(),
  "skipFreeSpaceCheckWhenImporting": z.boolean().optional(),
  "minimumFreeSpaceWhenImporting": z.number().int().optional(),
  "copyUsingHardlinks": z.boolean().optional(),
  "useScriptImport": z.boolean().optional(),
  "scriptImportPath": z.string().nullable().optional(),
  "importExtraFiles": z.boolean().optional(),
  "extraFileExtensions": z.string().nullable().optional(),
  "enableMediaInfo": z.boolean().optional()
}