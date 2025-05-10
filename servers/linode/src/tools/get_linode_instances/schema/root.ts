import { z } from "zod"

export const inputParams = {
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional(),
  "X-Filter": z.any().superRefine((x, ctx) => {
    const schemas = [z.record(z.any()).describe("Specify the name of the data field and the accompanying value."), z.object({ "+and": z.array(z.record(z.any()).describe("Specify the name of the data field and the accompanying value.")).describe("All conditions need to be true.").optional(), "+contains": z.string().describe("The provided string needs to be in the value.").optional(), "+gt": z.number().describe("The value needs to be greater than the provided number.").optional(), "+gte": z.number().describe("The value needs to be greater than or equal to the provided number.").optional(), "+lt": z.number().describe("The value needs to be less than the provided number.").optional(), "+lte": z.number().describe("The value needs to be less than or equal to the provided number.").optional(), "+neq": z.string().describe("The provided string is left out of the results.").optional(), "+or": z.array(z.record(z.any()).describe("Specify the name of the data field and the accompanying value.")).describe("At least one condition needs to be true.").optional(), "+order": z.enum(["asc","desc"]).describe("Sort in ascending (`asc`) or descending (`desc`) order. This defaults to `asc`. Requires `+order_by`."), "+order_by": z.string().describe("Order results based on the provided attribute. The attribute needs to be filterable.").optional() }).strict()];
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
  }).describe("Specifies the `X-Filter` header JSON object's filtering and sort criteria.").optional()
}