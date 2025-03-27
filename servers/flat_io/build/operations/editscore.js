import { z } from "zod";
export const toolName = `editscore`;
export const toolDescription = `Edit a score's metadata`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/scores/{score}`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "arranger": z.string().describe("The arranger of the score").optional(), "composer": z.string().describe("The composer of the score").optional(), "creationType": z.enum(["original", "arrangement", "other"]).describe("The type of creation (an orginal, an arrangement)").optional(), "description": z.string().max(2000).describe("Description of the creation").optional(), "license": z.enum(["copyright", "cc0", "cc-by", "cc-by-sa", "cc-by-nd", "cc-by-nc", "cc-by-nc-sa", "cc-by-nc-nd"]).describe("License of the creation. Read more about the Creative Commons licenses on https://creativecommons.org/licenses/\n").optional(), "licenseText": z.string().describe("The rights info written on the score").optional(), "lyricist": z.string().describe("The lyricist of the score").optional(), "privacy": z.enum(["public", "private", "organizationPublic", "privateLink"]).describe("The score main privacy mode.\n\n- `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users.\n- `private`: The score is private and can be only accessed, modified and administred by specified collaborators users.\n- `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`.\n- `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.\n\nThe score can also be individually shared to a set of users or groups using the different collaborators API methods.\n\nWhen a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.\n\nWhen using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available).\n").optional(), "sharingKey": z.string().regex(new RegExp("^[a-f0-9]{128}$")).describe("When using the `privacy` mode `privateLink`, this property can be used to set a custom sharing key, otherwise a new key will be generated.").optional(), "subtitle": z.string().describe("The subtitle of the score").optional(), "tags": z.array(z.string()).describe("Tags describing the score").optional(), "title": z.string().describe("The title of the score").optional() }).describe("Edit the score metadata").optional() }).shape;
