import { z } from "zod"

export const inputParamsSchema = {
  "state": z.boolean().describe("**true** : Shuffle user's playback.<br/>\n**false** : Do not shuffle user's playback.\n"),
  "device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional()
}