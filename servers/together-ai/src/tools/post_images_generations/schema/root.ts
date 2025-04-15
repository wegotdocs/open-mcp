import { z } from "zod"

export const inputParamsSchema = {
  "prompt": z.string().describe("A description of the desired images. Maximum length varies by model."),
  "model": z.union([z.enum(["black-forest-labs/FLUX.1-schnell-Free","black-forest-labs/FLUX.1-schnell","black-forest-labs/FLUX.1.1-pro"]), z.string()]).describe("The model to use for image generation.<br> <br> [See all of Together AI's image models](https://docs.together.ai/docs/serverless-models#image-models)\n"),
  "steps": z.number().int().describe("Number of generation steps.").optional(),
  "image_url": z.string().describe("URL of an image to use for image models that support it.").optional(),
  "seed": z.number().int().describe("Seed used for generation. Can be used to reproduce image generations.").optional(),
  "n": z.number().int().describe("Number of image results to generate.").optional(),
  "height": z.number().int().describe("Height of the image to generate in number of pixels.").optional(),
  "width": z.number().int().describe("Width of the image to generate in number of pixels.").optional(),
  "negative_prompt": z.string().describe("The prompt or prompts not to guide the image generation.").optional(),
  "response_format": z.enum(["base64","url"]).describe("Format of the image response. Can be either a base64 string or a URL.").optional(),
  "guidance": z.number().describe("Adjusts the alignment of the generated image with the input prompt. Higher values (e.g., 8-10) make the output more faithful to the prompt, while lower values (e.g., 1-5) encourage more creative freedom.").optional(),
  "output_format": z.enum(["jpeg","png"]).describe("The format of the image response. Can be either be `jpeg` or `png`. Defaults to `jpeg`.").optional(),
  "image_loras": z.array(z.object({ "path": z.string().describe("The URL of the LoRA to apply (e.g. https://huggingface.co/strangerzonehf/Flux-Midjourney-Mix2-LoRA)."), "scale": z.number().describe("The strength of the LoRA's influence. Most LoRA's recommend a value of 1.") })).describe("An array of objects that define LoRAs (Low-Rank Adaptations) to influence the generated image.").optional()
}