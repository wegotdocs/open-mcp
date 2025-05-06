import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "state": z.string().describe("A comma-separated list of states. If specified, only alerts with these states will be returned.\n\nCan be: `auto_dismissed`, `dismissed`, `fixed`, `open`").optional(),
  "severity": z.string().describe("A comma-separated list of severities. If specified, only alerts with these severities will be returned.\n\nCan be: `low`, `medium`, `high`, `critical`").optional(),
  "ecosystem": z.string().describe("A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.\n\nCan be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`").optional(),
  "package": z.string().describe("A comma-separated list of package names. If specified, only alerts for these packages will be returned.").optional(),
  "manifest": z.string().describe("A comma-separated list of full manifest paths. If specified, only alerts for these manifests will be returned.").optional(),
  "epss_percentage": z.string().describe("CVE Exploit Prediction Scoring System (EPSS) percentage. Can be specified as:\n- An exact number (`n`)\n- Comparators such as `>n`, `<n`, `>=n`, `<=n`\n- A range like `n..n`, where `n` is a number from 0.0 to 1.0\n\nFilters the list of alerts based on EPSS percentages. If specified, only alerts with the provided EPSS percentages will be returned.").optional(),
  "has": z.any().superRefine((x, ctx) => {
    const schemas = [z.string(), z.array(z.literal("patch"))];
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
  }).describe("Filters the list of alerts based on whether the alert has the given value. If specified, only alerts meeting this criterion will be returned.\nMultiple `has` filters can be passed to filter for alerts that have all of the values. Currently, only `patch` is supported.").optional(),
  "scope": z.enum(["development","runtime"]).describe("The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.").optional(),
  "sort": z.enum(["created","updated","epss_percentage"]).describe("The property by which to sort the results.\n`created` means when the alert was created.\n`updated` means when the alert's state last changed.\n`epss_percentage` sorts alerts by the Exploit Prediction Scoring System (EPSS) percentage.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "page": z.number().int().describe("**Closing down notice**. Page number of the results to fetch. Use cursor-based pagination with `before` or `after` instead.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "first": z.number().int().gte(1).lte(100).describe("**Deprecated**. The number of results per page (max 100), starting from the first matching result.\nThis parameter must not be used in combination with `last`.\nInstead, use `per_page` in combination with `after` to fetch the first page of results.").optional(),
  "last": z.number().int().gte(1).lte(100).describe("**Deprecated**. The number of results per page (max 100), starting from the last matching result.\nThis parameter must not be used in combination with `first`.\nInstead, use `per_page` in combination with `before` to fetch the last page of results.").optional()
}