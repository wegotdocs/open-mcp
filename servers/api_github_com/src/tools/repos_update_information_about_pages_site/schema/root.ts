import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "cname": z.string().nullable().describe("Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see \"[Using a custom domain with GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).\"").optional(),
  "https_enforced": z.boolean().describe("Specify whether HTTPS should be enforced for the repository.").optional(),
  "build_type": z.enum(["legacy","workflow"]).describe("The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.").optional(),
  "source": z.union([z.enum(["gh-pages","master","master /docs"]).describe("Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `\"gh-pages\"`, `\"master\"`, and `\"master /docs\"`."), z.object({ "branch": z.string().describe("The repository branch used to publish your site's source files."), "path": z.enum(["/","/docs"]).describe("The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.") }).describe("Update the source for the repository. Must include the branch name and path.")]).optional()
}