import { z } from "zod"

export const inputParams = {
  "id": z.string(),
  "b_id": z.number().int().readonly(),
  "name": z.string().max(100).describe("Note that changing the song name may affect the ability to sync DAW projects or retrieve exported audio files. Please ensure you rename the song elsewhere as needed."),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "updated_at": z.string().datetime({ offset: true }).optional(),
  "sync_enabled": z.boolean().optional(),
  "directory_name": z.string().max(200).nullable().describe("Specify a different folder name for Syncprojects-client to use (optional)").optional(),
  "last_mtime": z.string().datetime({ offset: true }).nullable().optional(),
  "project": z.number().int(),
  "is_locked": z.boolean().readonly(),
  "revision": z.number().int().readonly(),
  "url": z.string().max(300).nullable().optional(),
  "archived": z.boolean().describe("Prevent further syncs to this song. It can be downloaded, but no new changes made.").optional(),
  "project_file": z.string().max(200).nullable().describe("By default, the most recently edited .cpr file is opened. Usethis to supply a custom filename.").optional(),
  "album": z.number().int().nullable().optional(),
  "album_order": z.number().int().nullable().optional(),
  "duration": z.string().readonly()
}