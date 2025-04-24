import { z } from "zod"

export const inputParamsSchema = {
  "model": z.enum(["gpt-4o-transcribe","gpt-4o-mini-transcribe","whisper-1"]).describe("The model to use for transcription, current options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1`.\n").optional(),
  "language": z.string().describe("The language of the input audio. Supplying the input language in\n[ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format\nwill improve accuracy and latency.\n").optional(),
  "prompt": z.string().describe("An optional text to guide the model's style or continue a previous audio\nsegment.\nFor `whisper-1`, the [prompt is a list of keywords](/docs/guides/speech-to-text#prompting).\nFor `gpt-4o-transcribe` models, the prompt is a free text string, for example \"expect words related to technology\".\n").optional()
}