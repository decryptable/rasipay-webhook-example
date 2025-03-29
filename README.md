# RasiPay Webhook

[![Deploy with Vercel](./public/deploy-button.svg)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdecryptable%2Frasipay-webhook-example&env=BOT_TOKEN,TELEGRAM_CHAT_IDS,APP_NAME&project-name=rasipay-webhook&repository-name=rasipay-webhook&demo-title=RasiPay%20Webhook&demo-description=Implementasi%20webhook%20untuk%20bot%20Telegram%20%40RasiPayBot&demo-url=https%3A%2F%2Frasipay-webhook-example.vercel.app)

Sistem webhook modern untuk notifikasi pembayaran via Telegram. Aplikasi ini menyediakan endpoint webhook yang dapat menerima data pembayaran dan mengirimkan notifikasi ke Telegram secara real-time.

```txt
rasipay-webhook-example
|-app
| |-api
| | |-webhook
| | | |-route.ts
| |-globals.css
| |-layout.tsx
| |-page.tsx
| |-playground
| | |-page.tsx
| | |-react-swagger.tsx
|-bun.lockb
|-components
| |-deploy-button.tsx
| |-Footer.tsx
| |-glassmorphic-card.tsx
| |-Header.tsx
| |-swagger-ui.tsx
| |-theme-provider.tsx
| |-ui
| | |-accordion.tsx
| | |-alert-dialog.tsx
| | |-alert.tsx
| | |-aspect-ratio.tsx
| | |-avatar.tsx
| | |-badge.tsx
| | |-breadcrumb.tsx
| | |-button.tsx
| | |-calendar.tsx
| | |-card.tsx
| | |-carousel.tsx
| | |-chart.tsx
| | |-checkbox.tsx
| | |-collapsible.tsx
| | |-command.tsx
| | |-context-menu.tsx
| | |-dialog.tsx
| | |-drawer.tsx
| | |-dropdown-menu.tsx
| | |-form.tsx
| | |-hover-card.tsx
| | |-input-otp.tsx
| | |-input.tsx
| | |-label.tsx
| | |-menubar.tsx
| | |-navigation-menu.tsx
| | |-pagination.tsx
| | |-popover.tsx
| | |-progress.tsx
| | |-radio-group.tsx
| | |-resizable.tsx
| | |-scroll-area.tsx
| | |-select.tsx
| | |-separator.tsx
| | |-sheet.tsx
| | |-sidebar.tsx
| | |-skeleton.tsx
| | |-slider.tsx
| | |-sonner.tsx
| | |-switch.tsx
| | |-table.tsx
| | |-tabs.tsx
| | |-textarea.tsx
| | |-toast.tsx
| | |-toaster.tsx
| | |-toggle-group.tsx
| | |-toggle.tsx
| | |-tooltip.tsx
| | |-use-mobile.tsx
| | |-use-toast.ts
|-components.json
|-hooks
| |-use-mobile.tsx
| |-use-toast.ts
|-lib
| |-config.ts
| |-logger.ts
| |-rate-limit.ts
| |-swagger.ts
| |-telegram.ts
| |-utils.ts
| |-validation.ts
|-next.config.mjs
|-package.json
|-postcss.config.mjs
|-public
| |-deploy-button.svg
|-README.md
|-tailwind.config.ts
|-tsconfig.json
|-types
| |-WebhookData.ts

```
