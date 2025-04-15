import { z } from "zod"

export const inputParamsSchema = {
  "ft_id": z.string().describe("Fine-tune ID to download. A string that starts with `ft-`."),
  "checkpoint_step": z.number().int().describe("Specifies step number for checkpoint to download. Ignores `checkpoint` value if set.").optional(),
  "checkpoint": z.enum(["merged","adapter"]).describe("Specifies checkpoint type to download - `merged` vs `adapter`. This field is required if the checkpoint_step is not set.").optional(),
  "output": z.string().describe("Specifies output file name for downloaded model. Defaults to `$PWD/{model_name}.{extension}`.").optional()
}