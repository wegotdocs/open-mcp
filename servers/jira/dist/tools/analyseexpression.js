import { z } from "zod";
export const toolName = `analyseexpression`;
export const toolDescription = `Analyse Jira expression`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/expression/analyse`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const keys = {
    "query": [
        "check"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "contextVariables",
        "expressions"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "check": z.enum(["syntax", "type", "complexity"]).describe("The check to perform:\n\n *  `syntax` Each expression's syntax is checked to ensure the expression can be parsed. Also, syntactic limits are validated. For example, the expression's length.\n *  `type` EXPERIMENTAL. Each expression is type checked and the final type of the expression inferred. Any type errors that would result in the expression failure at runtime are reported. For example, accessing properties that don't exist or passing the wrong number of arguments to functions. Also performs the syntax check.\n *  `complexity` EXPERIMENTAL. Determines the formulae for how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) each expression may execute."), "contextVariables": z.record(z.string().describe("Context variables and their types. The type checker assumes that <a href=\"https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables\">common context variables</a>, such as <code>issue</code> or <code>project</code>, are available in context and sets their type. Use this property to override the default types or provide details of new variables.")).describe("Context variables and their types. The type checker assumes that [common context variables](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables), such as `issue` or `project`, are available in context and sets their type. Use this property to override the default types or provide details of new variables.").optional(), "expressions": z.array(z.string().describe("The list of Jira expressions to analyse.")).describe("The list of Jira expressions to analyse.") }).shape;
