import { z } from "zod"

export const inputParams = {
  "cloud_init": z.boolean().describe("Whether the uploaded Image supports cloud-init.").optional(),
  "description": z.string().describe("Description for the uploaded image.").optional(),
  "label": z.string().describe("Label for the uploaded image."),
  "region": z.string().describe("The region to upload to. Once uploaded, the image can be used in any region."),
  "tags": z.array(z.string().min(3).max(100)).min(0).max(500).describe("Tags you can use to organize images. A tag can be from 3 to 100 characters long, and an image can have a maximum of 500 total tags.").optional()
}