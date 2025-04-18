import { z } from "zod"

export const inputParamsSchema = {
  "codespace_name": z.string().describe("The name of the codespace."),
  "machine": z.string().describe("A valid machine to transition this codespace to.").optional(),
  "display_name": z.string().describe("Display name for this codespace").optional(),
  "recent_folders": z.array(z.string()).describe("Recently opened folders inside the codespace. It is currently used by the clients to determine the folder path to load the codespace in.").optional()
}