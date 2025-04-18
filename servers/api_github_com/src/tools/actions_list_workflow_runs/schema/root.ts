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
  "actor": z.string().describe("Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.").optional(),
  "branch": z.string().describe("Returns workflow runs associated with a branch. Use the name of the branch of the `push`.").optional(),
  "event": z.string().describe("Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see \"[Events that trigger workflows](https://docs.github.com/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\"").optional(),
  "status": z.enum(["completed","action_required","cancelled","failure","neutral","skipped","stale","success","timed_out","in_progress","queued","requested","waiting","pending"]).describe("Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub Actions can set a status of `waiting`, `pending`, or `requested`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "created": z.string().datetime({ offset: true }).describe("Returns workflow runs created within the given date-time range. For more information on the syntax, see \"[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).\"").optional(),
  "exclude_pull_requests": z.boolean().describe("If `true` pull requests are omitted from the response (empty array).").optional(),
  "check_suite_id": z.number().int().describe("Returns workflow runs with the `check_suite_id` that you specify.").optional(),
  "head_sha": z.string().describe("Only returns workflow runs that are associated with the specified `head_sha`.").optional()
}