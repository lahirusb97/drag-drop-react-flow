# Next.js Email Builder

This project provides a drag-and-drop email template editor built with **Next.js** and **JavaScript**. All email workflow components live inside `src/components/email-template-builder` so they can be easily copied into other projects.

## Development

```bash
npm install
npm run dev
```

The editor page is available at the root route (`/`).
All files in `src/components/email-template-builder` are self contained so you can
copy that folder to another Next.js or React project and reuse the editor.

## Folder structure

```
src/
  components/
    email-template-builder/  # reusable email builder
  app/
    layout.js
    page.js
    not-found.js
```
