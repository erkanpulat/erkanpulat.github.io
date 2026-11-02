# Codex usage limits and quota tracking.

https://erkanpulat.github.io/en/projects/quotacrew/codex-usage-limits/

A practical guide to checking remaining usage, reading the next reset time and keeping track of work interrupted by a quota limit.

Erkan Pulat

Sources checked: 2026-10-30

## Where can I check my Codex usage limits?

Use the official usage dashboard for current limits and reset times. In an active Codex CLI session, use /status. Allowances vary with your plan, model and task scope; do not assume a fixed message count.

[OpenAI Help: Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)

## Remaining quota and reset time are different.

Read remaining capacity and renewal time together in QuotaCrew. A percentage describes capacity; a date or countdown describes when the corresponding window renews. Neither is a count of completed tasks.

Evaluate five-hour and weekly fields separately when your account supplies them. A missing field is not zero remaining quota: refresh the data and compare with the official dashboard. Not every plan uses the same limit windows.

[OpenAI Help: How resets work in Codex](https://help.openai.com/en/articles/20001498-how-resets-work-in-codex)

## A reset credit is different from a normal refresh.

A normal five-hour or weekly refresh follows the usage window on your account. If your account offers a banked reset or a purchased reset, that is a separate action; check the official usage screen for eligibility, covered allowances and expiration.

QuotaCrew helps compare visible reset credits and renewal times across accounts. Do not treat them as new credits, a permanent limit increase or an offer that applies to every account.

[OpenAI Help: How resets work in Codex](https://help.openai.com/en/articles/20001498-how-resets-work-in-codex)

## What should I do when a Codex usage limit is reached?

First confirm that quota caused the interruption. A network error, a sign-in issue and a pending user approval are different conditions. Repeated continuation requests do not explain the underlying problem.

1. Identify the account and conversation associated with the interrupted work.
2. Refresh remaining capacity and reset times; check missing information in the official dashboard.
3. If waiting, use the reset time for the relevant window. If you have another account, only consider one you are authorized to use.
4. Save your work before switching. Desktop may restart; verify the continuation result separately.

## Manage Codex accounts and quotas with QuotaCrew.

QuotaCrew for Codex is a free, open-source Windows app. It helps compare saved accounts, current quotas and ongoing work in one window. After installation, add your accounts, refresh quotas and check the active account.

Manual switching, approving a suggestion and automatic account switching are distinct workflows. Start manually to verify the active account and where work stopped, then enable automation according to your preferences.

[QuotaCrew documentation](https://github.com/erkanpulat/codex-quotacrew)

## Continue the same conversation in Desktop and VS Code.

QuotaCrew can request continuation of supported, quota-interrupted conversations. This is not a guarantee: monitoring, the relevant continuation option, an available account and connection support in the installed Codex version are required.

A continuation request is new model input and can consume quota. User approval steps are not skipped. Local VS Code support is experimental; do not assume support for Remote, WSL, cloud or other-device conversations.

[QuotaCrew continuation support](https://github.com/erkanpulat/codex-quotacrew/blob/main/docs/continuity.md)

## QuotaCrew does not increase or reset Codex limits.

QuotaCrew displays existing account capacity and manages switches; it does not create extra allowance. It cannot change OpenAI limits, pricing or access conditions. It is independent community software, not affiliated with or endorsed by OpenAI.

## Sources and scope

This guide is not a plan or pricing table. Use the official OpenAI dashboard for current allowance and the documentation for your installed QuotaCrew version for supported features.

- [OpenAI Help: Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)
- [OpenAI Help: How resets work in Codex](https://help.openai.com/en/articles/20001498-how-resets-work-in-codex)
- [QuotaCrew documentation](https://github.com/erkanpulat/codex-quotacrew)
- [QuotaCrew continuation support](https://github.com/erkanpulat/codex-quotacrew/blob/main/docs/continuity.md)

[Explore QuotaCrew features and Windows setup](https://erkanpulat.github.io/en/projects/quotacrew/)

Independent community software. Not affiliated with OpenAI.
