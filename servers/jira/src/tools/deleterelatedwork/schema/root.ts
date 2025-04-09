import { z } from "zod"

export const inputParams = {
  "versionId": z.string().describe("The ID of the version that the target related work belongs to."),
  "relatedWorkId": z.string().describe("The ID of the related work to delete.")
}