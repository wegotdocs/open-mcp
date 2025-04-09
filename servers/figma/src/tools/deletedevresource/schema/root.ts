import { z } from "zod"

export const inputParams = {
  "file_key": z.string().describe("The file to delete the dev resource from. This must be a main file key, not a branch key."),
  "dev_resource_id": z.string().describe("The id of the dev resource to delete.")
}