# QuotaCrew for Codex

> Your Codex accounts, remaining quotas, reset times and ongoing work in one window. Find an available account, choose how you switch, and request continuation of eligible conversations in Codex Desktop or VS Code with QuotaCrew.

Codex Account Manager is now QuotaCrew for Codex.

[QuotaCrew: Codex Quota & Account Manager | Erkan Pulat](https://erkanpulat.github.io/en/projects/quotacrew/)

Free · Windows x64 · Python included · No Node.js required

## Codex account management and quota tracking.

### Codex usage limits at a glance

Compare five-hour and weekly remaining quotas, renewal times, the active account and available reset credits in one table. Search, filter and sort accounts, including by recorded subscription period.

### Codex account switching

Change accounts yourself, approve a suggestion or enable automatic switching to an available account. Pause monitoring and continuation whenever you need.

### Continue in Desktop and VS Code

A continuation request goes to the same eligible, quota-interrupted conversation. Its existing goal, instructions and budget stay in place; eligible Desktop goals open once without an extra message.

### Jobs and activity

Follow running, completed and quota-interrupted work. Inspect the latest account-switch results, continuation preparation and whether a new turn actually started.

### Fit your working routine

Monitor from the system tray, start with Windows or schedule shutdown when a selected job finishes, verified five-hour limits run out or a timer expires.

### Update from the app

Review new stable releases and release notes. Installed copies verify the package and back up local data before updating.

## When a limit hits, keep the conversation.

With monitoring and the relevant continuation option enabled, QuotaCrew rechecks the quota-interrupted work and destination account. After switching, it opens an eligible Desktop goal conversation once without an extra message; other supported conversations receive a continuation request in the same thread, and Jobs tracks whether a new turn actually starts.

Automatic Desktop and IDE continuation is experimental and depends on connection support in your installed Codex version. Accounts and conversations are checked again during the handoff, which can take a few minutes. Approval steps and user responses stay under your control.

[Read the continuation details ↗](https://github.com/erkanpulat/codex-quotacrew/blob/main/docs/continuity.md)

## Know where your work stands.

See conversations, their accounts and last-check times together in Jobs. Search local history by project, source, title or folder and open the project in your editor.

## Continue inside your editor, too.

Use OpenAI’s Codex extension in VS Code. Enable IDE continuation in QuotaCrew; if the session needs to reload, also enable VS Code refresh. The single local window reopens the interrupted conversation’s workspace and that same conversation.

AI-generated illustration from the README; this is not a live test screenshot.

## Start, follow, finish.

### Automatic shutdown

Plan shutdown after a selected job finishes, all saved accounts’ available limits run out, or 1–1440 minutes. Verified work and limit conditions begin a cancellable two-minute countdown when no other work is running. Timer mode does not wait for jobs to finish.

### Verified updates

Installed copies check for stable releases. Read the release notes and choose Update: package size and SHA-256 are verified, data is backed up and QuotaCrew restarts. Portable copies are updated manually.

## Install QuotaCrew on Windows.

1. **Download and open.** Get the Windows installer from the latest release. For portable use, extract the entire ZIP into a folder and open QuotaCrew.exe.
2. **Choose your preferences.** The first-run assistant introduces monitoring, switching, continuation and tray options. If Codex CLI is missing, it offers official Windows installation with your consent.
3. **Add your accounts.** Open My accounts → Add account and give it a recognizable name. Complete sign-in in the terminal and browser; you can copy the link to another browser, but keep the terminal open until QuotaCrew confirms the account is linked.

## Your accounts and history stay local.

Profiles, preferences and tracking records stay on your computer. QuotaCrew has no telemetry or credential proxy. Installation and updates preserve your existing Codex conversation history.

[Security and data storage ↗](https://github.com/erkanpulat/codex-quotacrew/blob/main/SECURITY.md)

## Questions before you start

### What is QuotaCrew? Is it Codex Account Manager?

Yes. QuotaCrew for Codex is the new name of Codex Account Manager. It is a free, MIT-licensed Windows app I built for Codex accounts, quota tracking, account switching and continuation of eligible conversations.

### How can I track Codex usage limits and quotas?

QuotaCrew shows the five-hour and weekly remaining quotas, renewal times and active account for your saved Codex accounts in one view. This makes it easier to see which account is available and whether waiting for a reset makes sense.

### What happens when my Codex quota or usage limit is reached?

QuotaCrew does not increase or change Codex limits. When monitoring is enabled, it shows quota-interrupted work and available accounts; you can manage a switch and request continuation for supported conversations.

### How do I switch Codex accounts or enable automatic account switching?

You can switch an account yourself, approve a QuotaCrew suggestion or enable automatic switching to an available account. Account and conversation state are checked before the switch, and user approval steps are never skipped.

### When does my Codex quota reset?

There is no single reset time for every account. Check the official usage dashboard or run /status in Codex CLI for the relevant five-hour or weekly window. QuotaCrew makes these values easier to compare across your accounts; it does not change OpenAI limits.

### Can I manage multiple Codex accounts with QuotaCrew?

Yes. Add accounts you are authorized to use in My accounts, compare remaining capacity and the active account in one table, then switch manually or enable automatic switching to an available account.

### Is QuotaCrew a free Codex app for Windows?

Yes. QuotaCrew is a free, MIT-licensed, open-source Windows x64 app. Python is included, so Node.js is not required. Windows packages are not code-signed and can be checked against the published SHA-256 values.

### Does it work with VS Code?

It offers experimental continuation for local VS Code conversations opened with OpenAI’s Codex extension. Optional automatic refresh supports one local window. Remote, WSL, cloud and other-device conversations are outside this scope.

### Will every interrupted task resume automatically?

Continuation is not guaranteed for every task. Monitoring and the relevant option must be enabled; the quota interruption, available account and conversation connection must be verified. A continuation request is new model input and can consume quota. User approval steps are not skipped.

### Do I need to install Python or Node.js?

The Windows package includes Python; Node.js is not required. If Codex CLI is missing, the first-run assistant offers installation with your consent. Account switching restarts Codex Desktop; save your work first.

### How are credentials stored?

They stay on your computer. The Microsoft Store build in preparation encrypts saved profile credentials and switch-recovery data with Windows DPAPI. The shared Codex credential file and SQLite metadata remain unencrypted; older published versions use file permissions. See the privacy policy for details. Diagnostic exports exclude credentials, databases and conversation text.

### Is it free? Does it increase account quotas?

QuotaCrew is free and open source. It does not increase quotas; it helps you track existing capacity and manage account switches. It is independent community software, not affiliated with or endorsed by OpenAI.

## Links

- [Download for Windows](https://github.com/erkanpulat/codex-quotacrew/releases/latest)
- [GitHub](https://github.com/erkanpulat/codex-quotacrew)
- [Codex usage limits and quota tracking guide](https://erkanpulat.github.io/en/projects/quotacrew/codex-usage-limits/)
- [README — English](https://github.com/erkanpulat/codex-quotacrew/blob/main/README.md)
- [README — Türkçe](https://github.com/erkanpulat/codex-quotacrew/blob/main/README.tr.md)

Independent community software. Not affiliated with OpenAI.
