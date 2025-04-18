import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "name": z.string(),
  "new_name": z.string().describe("The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png \":strawberry:\"). For a full list of available emoji and codes, see \"[Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet).\"").optional(),
  "color": z.string().describe("The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.").optional(),
  "description": z.string().describe("A short description of the label. Must be 100 characters or fewer.").optional()
}