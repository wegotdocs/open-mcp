import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().describe("A descriptive name for the new key.").optional(),
  "key": z.string().regex(new RegExp("^ssh-(rsa|dss|ed25519) |^ecdsa-sha2-nistp(256|384|521) |^(sk-ssh-ed25519|sk-ecdsa-sha2-nistp256)@openssh.com ")).describe("The public SSH key to add to your GitHub account. For more information, see \"[Checking for existing SSH keys](https://docs.github.com/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys).\"")
}