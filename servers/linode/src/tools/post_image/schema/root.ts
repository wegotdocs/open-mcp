import { z } from "zod"

export const inputParams = {
  "cloud_init": z.boolean().describe("Whether this image supports [cloud-init](https://www.linode.com/docs/guides/write-files-with-cloud-init/).").optional(),
  "description": z.string().describe("A detailed description of this image.").optional(),
  "disk_id": z.number().int().describe("The ID of the target Linode disk for this image."),
  "label": z.string().describe("The short title for this image. If not provided, the disk's current label is used.").optional(),
  "tags": z.array(z.string().min(3).max(100)).min(0).max(500).describe("Tags used for organizational purposes. A tag can be from 3 to 100 characters long, and an image can have a maximum of 500 total tags.").optional()
}