import { z } from "zod"

export const inputParamsSchema = {
  "LabelID": z.string().regex(new RegExp("^([\\d]{1,2})?$")).describe("Label ID"),
  "AssociationID": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().regex(new RegExp("^[A-Za-z0-9._]{4,23}-[A-Za-z0-9._]{4,14}(-[A-Za-z0-9._]{4,10})?(-[A-Za-z0-9._]{4,10})?$")).describe("Message ID"), z.string().regex(new RegExp("^[\\d-]{10,31}@[\\w\\.]{1,}$")).describe("Chat ID")];
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
  }).describe("Chat ID or Message ID for label association")
}