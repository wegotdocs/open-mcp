import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["near_field","far_field"]).describe("Type of noise reduction. `near_field` is for close-talking microphones such as headphones, `far_field` is for far-field microphones such as laptop or conference room microphones.\n").optional()
}