import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "asset_id": z.number().int().describe("The unique identifier of the asset."),
  "name": z.string().describe("The file name of the asset.").optional(),
  "label": z.string().describe("An alternate short description of the asset. Used in place of the filename.").optional(),
  "state": z.string().optional()
}