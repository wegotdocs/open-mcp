---
name: "install-boltmcp"
description: "Use this Skill when asked to help install or uninstall BoltMCP"
allowed-tools:
  - "Bash(.claude/skills/install-boltmcp/scripts/get-workstation-info.sh)"
metadata:
  version: "1.0.0"
---

# Workstation environment

Here are the installed CLI tools, kubectl contexts, and `./keys` directory contents on this workstation:

!`.claude/skills/install-boltmcp/scripts/get-workstation-info.sh`

# Check for updates

Before installing, updating or uninstalling BoltMCP, verify that this local repo is up-to-date with `main` at https://github.com/boltmcp/boltmcp

If it isn't, prompt the user to git pull before starting a new chat session to do the install/update/uninstall.

# Install BoltMCP

## Ask questions to gather context

Ask the following questions in order. Use the ask question tool if available, otherwise just ask them in natural language. You may skip any question for which you already know the answer through previous interaction with the user.

### 1. Where do you want to install BoltMCP?

Multiple choice answers:

- On a new Kubernetes cluster
- On an existing Kubernetes cluster

### 2. Which cluster do you want to install on? (only ask this if they want to use an existing cluster)

Derive the multiple choice answers from the list of clusters above if present, also including an "Other" option.

### 3. Which is your preferred cloud provider?

Multiple choice answers:

- Google
- AWS
- Azure
- Other

Choose the default based on which provider CLI is installed on the workstation (from the workstation info above): `gcloud` → Google, `aws` (and/or `eksctl`) → AWS, `az` → Azure. If multiple are installed, prefer Google, then AWS, then Azure. If none are installed, default to Google.

### 4. What domain do you want to deploy to?

If you know the user's email address and it seems like their work email, default to `boltmcp.example.com`, replacing `example.com` with their work email domain (explaining that's why you're suggesting it). Give them another option to type something instead.

If you don't know their work email, ask them to type the domain. Recommend them to choose `boltmcp.example.com` where `example.com` is their company's main domain.

## Check the workstation environment

1. Check the `./keys` directory listing in the workstation info above for a JSON access key file. You don't have permission to read the file, just note its location. If no such file is present, prompt the user to put their BoltMCP access key file in `./keys` before continuing.
2. Cross-reference the tool versions in the workstation info above against the prerequisites for the chosen install path (see below), and flag anything missing or out-of-range.
3. If the user chose one of the big three providers, check that the appropriate CLI `gcloud` / `aws` / `az` is installed and also check that the user is logged in. **Do not run commands that print credentials** (e.g. `gcloud auth print-access-token`) — they leak tokens into the terminal output. Use identity-only probes instead:
   - **gcloud:** `gcloud auth list --filter=status:ACTIVE --format='value(account)'` (prints the active account email, nothing else)
   - **aws:** `aws sts get-caller-identity` (prints IAM identity, not credentials)
   - **az:** `az account show --query user.name -o tsv` (prints username)

   If they opted to create a new cluster but didn't specify a cloud provider, choose a default based on the available CLIs.

## Follow the docs to install

Choose the install path:

- **New cluster on AWS or Google → Terraform.** Follow `docs/terraform-aws.mdx` (stack in `./terraform/aws`) or `docs/terraform-gcp.mdx` (stack in `./terraform/gcp`), including its Prerequisites and DNS sections. On Google, also ask for the GCP project ID to deploy into, and check Application Default Credentials exist with `test -f ~/.config/gcloud/application_default_credentials.json && echo ok` (don't read the file); if not, ask the user to run `gcloud auth application-default login` themselves. If `terraform` isn't installed, ask the user's explicit permission before installing it, and offer them the option to install it themselves: https://developer.hashicorp.com/terraform/install
- **Anything else → manual.** Follow the pages in `docs/(manual)/meta.json` order. When creating a new cluster, always use the evaluation tier.

Then follow `docs/vault-secret-store.mdx` and `docs/sign-in.mdx`. The end result should be a successful installation of BoltMCP on the user's cluster which they can successfully log in to.

## Additional notes to consider during the install process

**Email addresses**

Ask the user for a valid email address for the first BoltMCP user (defaults to the work email from above if present).

**Config**

The most important sample yaml files mentioned in the docs are also included as standalone files in `./config/` in the project root directory:

!`find config -type f -name "*.yaml"`

You can modify these files in-place and reference them directly.

**Scripts**

Similarly, the following bash script(s) from the docs are included as files which you can execute directly:

!`find scripts/allow -type f -name "*.sh"`

These script(s) are also included but you don't have permission to execute them:

!`find scripts/deny -type f -name "*.sh"`

Instead, tell the user to run them manually if required.

**Communicating waiting time**

Before running any commands which might take a while to run (e.g. 1 minute or more), warn the user with a rough time estimate.

**Vault**

Do not run the init/unseal/bootstrap commands yourself, just present them to the user to run manually. On manual installs, continue with Ingress while they do (get the info you need for Ingress before telling the user what vault commands to run).

**Ingress (manual installs only)**

After successfully deploying the chart, ask the user if they'd like to set up their ingress manually, or if they'd like a reference setup with NGINX. If the former, give them the hostnames table. If the latter, ask for an optional email address to receive warnings when a certificate is approaching expiry (defaults to the first user email). If their global.domain is a subdomain, explain that the DNS record values depend on whether the hosted zone is for the apex (most likely) or if it's also the subdomain. Give hostname values to update for each scenario, making it clear of the distinction.

**Waiting for Kubernetes resources to become ready**

Do not use `kubectl get ... -w` — it produces a streaming watch that never terminates and is useless to a non-interactive agent. Instead, use whichever of these fits:

- `kubectl wait --for=condition=Ready ...` for a single resource with a `Ready` condition. Do NOT pair this with a label selector that can match Job/migration pods (e.g. `app.kubernetes.io/instance=boltmcp`) — `Completed` pods have no `Ready` condition and `wait` will block until timeout.
- For Deployments, prefer `kubectl rollout status deployment/<name> -n <ns>` (or `kubectl wait --for=condition=Available deployment -l ... -n <ns>`).
- A blocking readiness poll that exits as soon as the predicate is true, for example:

```bash
until [ "$(kubectl get certificate boltmcp-tls -n boltmcp -o jsonpath='{.status.conditions[?(@.type=="Ready")].status}' 2>/dev/null)" = "True" ]; do sleep 10; done
```

Always wait for readiness before proceeding to a step that depends on the resource (e.g. wait for a `ClusterIssuer` to be `Ready=True` before running the `helm upgrade` that enables the chart-managed Ingress referencing it). Do not substitute `sleep N` for a real readiness check.

**Getting account credentials**

At the end of a successful install tell the user what command to run to get their login details, using the script in the deny directory.

**Feedback and help**

If anything doesn't immediately work, or is at all unclear or ambiguous or strange in any way, make a note of it in `INSTALL-FEEDBACK.md` in the project root directory.

Don't hesitate to ask the user along the way if you need any extra info or decisions from them, they are there to help.

# Install method (upgrade and uninstall)

Before upgrading or uninstalling, work out how BoltMCP was installed. If `./terraform/aws/terraform.tfstate` or `./terraform/gcp/terraform.tfstate` exists (or `terraform state list` in either directory shows resources), it's a Terraform install in that directory; if unsure, ask. For Terraform installs, follow the "Terraform installs" section of the upgrading or uninstall docs, and only ask for the target chart version (when upgrading). For manual installs, follow the "Manual installs" section.

# Upgrade BoltMCP

Read the docs on upgrading as well as the relevant values yaml in `./config/`, then ask the following questions:

## Ask questions to gather context

1. **Cluster name** — where BoltMCP is installed. Offer multiple choice from the list of clusters above if present, plus "Other".
2. **Helm release name** — defaults to `boltmcp`.
3. **Namespace** — defaults to `boltmcp`.
4. **Target chart version** — defaults to the version from the upgrading docs.
5. If the values file contains stale/placeholder values, ask questions to get the necessary values.

If the user isn't sure of the release or namespace, run `helm list -A`.

# Uninstall BoltMCP

## Ask questions to gather context

Before following the uninstall docs, ask the user for:

1. **Cluster name** — where BoltMCP is installed. Give multiple choice answers from the list of clusters above if present, also including an "Other" option.
2. **Helm release name** — defaults to `boltmcp`.
3. **Namespace** — defaults to `boltmcp`.

If the user isn't sure of the release or namespace, run `helm list -A` to find them.

## Follow the docs to uninstall

Follow all the steps described in the uninstall docs page, substituting the user's values for the `RELEASE` and `NAMESPACE` shell variables exported at the top of the page. These instructions apply equally to partial uninstalls (e.g. rolling back a failed install) — follow the same steps, skipping any that relate to resources that were never created.

If anything doesn't immediately work, or is at all unclear or ambiguous or strange in any way, make a note of it in `UNINSTALL-FEEDBACK.md` in the project root directory.
