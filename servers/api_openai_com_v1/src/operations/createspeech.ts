import { z } from "zod"

export const toolName = `createspeech`
export const toolDescription = `Generates audio from the input text.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/audio/speech`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "body": z.object({ "model": z.union([z.string(), z.enum(["tts-1","tts-1-hd","gpt-4o-mini-tts"])]).describe("One of the available [TTS models](/docs/models#tts): `tts-1`, `tts-1-hd` or `gpt-4o-mini-tts`.\n"), "input": z.string().max(4096).describe("The text to generate audio for. The maximum length is 4096 characters."), "instructions": z.string().max(4096).describe("Control the voice of your generated audio with additional instructions. Does not work with `tts-1` or `tts-1-hd`.").optional(), "voice": z.union([z.string(), z.enum(["alloy","ash","ballad","coral","echo","fable","onyx","nova","sage","shimmer","verse"])]).describe("The voice to use when generating the audio. Supported voices are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage`, `shimmer`, and `verse`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech#voice-options)."), "response_format": z.enum(["mp3","opus","aac","flac","wav","pcm"]).describe("The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`."), "speed": z.number().gte(0.25).lte(4).describe("The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default.") }).strict().optional() }).shape