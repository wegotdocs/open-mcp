import { z } from "zod"

export const inputParamsSchema = {
  "model": z.union([z.string(), z.enum(["tts-1","tts-1-hd"])]).describe("One of the available [TTS models](https://platform.openai.com/docs/models/tts): `tts-1` or `tts-1-hd`\n"),
  "input": z.string().max(4096).describe("The text to generate audio for. The maximum length is 4096 characters."),
  "voice": z.enum(["alloy","echo","fable","onyx","nova","shimmer"]).describe("The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`. Previews of the voices are available in the [Text to speech guide](https://platform.openai.com/docs/guides/text-to-speech/voice-options)."),
  "response_format": z.enum(["mp3","opus","aac","flac","wav","pcm"]).describe("The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`.").optional(),
  "speed": z.number().gte(0.25).lte(4).describe("The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default.").optional()
}