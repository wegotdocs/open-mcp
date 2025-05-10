import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(1).lte(500).describe("Record limit").optional(),
  "arrived": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$")), z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$")), z.string().regex(new RegExp("^P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$"))];
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
  }).describe("A time interval in ISO 8601 format. This can be one of:\n\n    1. Start and end time\n    2. Start time and duration\n    3. Duration and end time\nThe string \"NOW\" can also be used in place of a start/end time.\n").optional(),
  "created": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$")), z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$")), z.string().regex(new RegExp("^P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$"))];
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
  }).describe("A time interval in ISO 8601 format. This can be one of:\n\n    1. Start and end time\n    2. Start time and duration\n    3. Duration and end time\nThe string \"NOW\" can also be used in place of a start/end time.\n").optional(),
  "published": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$")), z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$")), z.string().regex(new RegExp("^P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$"))];
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
  }).describe("A time interval in ISO 8601 format. This can be one of:\n\n    1. Start and end time\n    2. Start time and duration\n    3. Duration and end time\nThe string \"NOW\" can also be used in place of a start/end time.\n").optional(),
  "station": z.string().describe("Station identifier").optional(),
  "type": z.string().describe("Record type").optional(),
  "feed": z.string().describe("Originating product feed").optional(),
  "resolution": z.number().int().gte(1).describe("Resolution version").optional()
}