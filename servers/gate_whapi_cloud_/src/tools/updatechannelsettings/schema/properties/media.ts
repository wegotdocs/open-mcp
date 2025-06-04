import { z } from "zod"

export const inputParamsSchema = {
  "auto_download": z.array(z.enum(["image","audio","voice","video","document","sticker"])).describe("An array specifying which types of media to automatically download.").optional(),
  "init_avatars": z.boolean().describe("Set to true if you need to get avatars after channel authorization").optional()
}