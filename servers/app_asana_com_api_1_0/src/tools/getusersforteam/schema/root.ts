import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["email","name","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60","workspaces","workspaces.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}