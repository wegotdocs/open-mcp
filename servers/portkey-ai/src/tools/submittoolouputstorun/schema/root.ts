import { z } from "zod"

export const inputParams = {
  "thread_id": z.string().describe("The ID of the [thread](https://platform.openai.com/docs/api-reference/threads) to which this run belongs."),
  "run_id": z.string().describe("The ID of the run that requires the tool output submission."),
  "tool_outputs": z.array(z.object({ "tool_call_id": z.string().describe("The ID of the tool call in the `required_action` object within the run object the output is being submitted for.").optional(), "output": z.string().describe("The output of the tool call to be submitted to continue the run.").optional() })).describe("A list of tools for which the outputs are being submitted."),
  "stream": z.boolean().nullable().describe("If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.\n").optional()
}