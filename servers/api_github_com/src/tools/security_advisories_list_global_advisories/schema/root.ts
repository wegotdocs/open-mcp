import { z } from "zod"

export const inputParamsSchema = {
  "ghsa_id": z.string().describe("If specified, only advisories with this GHSA (GitHub Security Advisory) identifier will be returned.").optional(),
  "type": z.enum(["reviewed","malware","unreviewed"]).describe("If specified, only advisories of this type will be returned. By default, a request with no other parameters defined will only return reviewed advisories that are not malware.").optional(),
  "cve_id": z.string().describe("If specified, only advisories with this CVE (Common Vulnerabilities and Exposures) identifier will be returned.").optional(),
  "ecosystem": z.enum(["rubygems","npm","pip","maven","nuget","composer","go","rust","erlang","actions","pub","other","swift"]).describe("The package's language or package management ecosystem.").optional(),
  "severity": z.enum(["unknown","low","medium","high","critical"]).describe("If specified, only advisories with these severities will be returned.").optional(),
  "cwes": z.any().superRefine((x, ctx) => {
    const schemas = [z.string(), z.array(z.string())];
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
  }).describe("If specified, only advisories with these Common Weakness Enumerations (CWEs) will be returned.\n\nExample: `cwes=79,284,22` or `cwes[]=79&cwes[]=284&cwes[]=22`").optional(),
  "is_withdrawn": z.boolean().describe("Whether to only return advisories that have been withdrawn.").optional(),
  "affects": z.any().superRefine((x, ctx) => {
    const schemas = [z.string(), z.array(z.string()).max(1000)];
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
  }).describe("If specified, only return advisories that affect any of `package` or `package@version`. A maximum of 1000 packages can be specified.\nIf the query parameter causes the URL to exceed the maximum URL length supported by your client, you must specify fewer packages.\n\nExample: `affects=package1,package2@1.0.0,package3@^2.0.0` or `affects[]=package1&affects[]=package2@1.0.0`").optional(),
  "published": z.string().describe("If specified, only return advisories that were published on a date or date range.\n\nFor more information on the syntax of the date range, see \"[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).\"").optional(),
  "updated": z.string().describe("If specified, only return advisories that were updated on a date or date range.\n\nFor more information on the syntax of the date range, see \"[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).\"").optional(),
  "modified": z.string().describe("If specified, only show advisories that were updated or published on a date or date range.\n\nFor more information on the syntax of the date range, see \"[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).\"").optional(),
  "epss_percentage": z.string().describe("If specified, only return advisories that have an EPSS percentage score that matches the provided value.\nThe EPSS percentage represents the likelihood of a CVE being exploited.").optional(),
  "epss_percentile": z.string().describe("If specified, only return advisories that have an EPSS percentile score that matches the provided value.\nThe EPSS percentile represents the relative rank of the CVE's likelihood of being exploited compared to other CVEs.").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "sort": z.enum(["updated","published","epss_percentage","epss_percentile"]).describe("The property to sort the results by.").optional()
}