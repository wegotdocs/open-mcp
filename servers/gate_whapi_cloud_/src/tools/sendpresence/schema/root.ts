import { z } from "zod"

export const inputParamsSchema = {
  "EntryID": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().regex(new RegExp("^([\\d]{7,15})?$")).describe("Contact ID"), z.string().regex(new RegExp("^[\\d-]{10,31}@[\\w\\.]{1,}$")).describe("Chat ID")];
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
  }).describe("Contact or group id"),
  "presence": z.enum(["typing","recording","pause"]),
  "delay": z.number().gte(0).describe("Delay in seconds to simulate typing or recording").optional()
}