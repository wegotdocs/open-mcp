import { z } from "zod";
export const inputParams = {
    "file_ids": z.array(z.string()).max(20).describe("A list of [file](https://platform.openai.com/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.\n").optional()
};
