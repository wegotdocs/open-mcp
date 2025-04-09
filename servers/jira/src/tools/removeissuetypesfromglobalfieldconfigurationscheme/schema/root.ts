import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("The ID of the field configuration scheme."),
  "issueTypeIds": z.array(z.string()).describe("The list of issue type IDs. Must contain unique values not longer than 255 characters and not be empty. Maximum of 100 IDs.")
}