import { z } from "zod"

export const inputParamsSchema = {
  "photo_reference": z.string().describe("A string identifier that uniquely identifies a photo. Photo references are returned from either a Place Search or Place Details request.\n"),
  "maxheight": z.number().describe("Specifies the maximum desired height, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer between `1` and `1600`.\n").optional(),
  "maxwidth": z.number().describe("Specifies the maximum desired width, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer between `1` and `1600`.\n").optional()
}