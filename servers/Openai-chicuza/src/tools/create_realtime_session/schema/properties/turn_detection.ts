import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["server_vad","semantic_vad"]).describe("Type of turn detection.\n").optional(),
  "eagerness": z.enum(["low","medium","high","auto"]).describe("Used only for `semantic_vad` mode. The eagerness of the model to respond. `low` will wait longer for the user to continue speaking, `high` will respond more quickly. `auto` is the default and is equivalent to `medium`.\n").optional(),
  "threshold": z.number().describe("Used only for `server_vad` mode. Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A \nhigher threshold will require louder audio to activate the model, and \nthus might perform better in noisy environments.\n").optional(),
  "prefix_padding_ms": z.number().int().describe("Used only for `server_vad` mode. Amount of audio to include before the VAD detected speech (in \nmilliseconds). Defaults to 300ms.\n").optional(),
  "silence_duration_ms": z.number().int().describe("Used only for `server_vad` mode. Duration of silence to detect speech stop (in milliseconds). Defaults \nto 500ms. With shorter values the model will respond more quickly, \nbut may jump in on short pauses from the user.\n").optional(),
  "create_response": z.boolean().describe("Whether or not to automatically generate a response when a VAD stop event occurs.\n").optional(),
  "interrupt_response": z.boolean().describe("Whether or not to automatically interrupt any ongoing response with output to the default\nconversation (i.e. `conversation` of `auto`) when a VAD start event occurs.\n").optional()
}