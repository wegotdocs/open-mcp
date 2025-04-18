import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "workflow_id": z.any().superRefine((x, ctx) => {
    const schemas = [z.number().int(), z.string()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("The ID of the workflow. You can also pass the workflow file name as a string."),
  "ref": z.string().describe("The git reference for the workflow. The reference can be a branch or tag name."),
  "inputs": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `inputs` to the tool, first call the tool `expandSchema` with \"/properties/inputs\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted.</property-description>").optional()
}