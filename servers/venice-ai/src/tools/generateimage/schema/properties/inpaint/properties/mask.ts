import { z } from "zod"

export const inputParamsSchema = {
  "image_prompt": z.string().describe("A text prompt describing the original input image that an image model would use to produce a similar/identical image, including the changed features the user will be inpainting."),
  "inferred_object": z.string().describe("The content the user is adding to the image via inpainting, meant to replace the pixels occupied by object_target."),
  "object_target": z.string().describe("One or more elements contained within the original image the user wants to inpaint over; used by a segmentation model to create an image mask.")
}