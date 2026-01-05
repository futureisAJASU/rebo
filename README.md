# rebo (repo bootstrap + repo utilities)

# rebo — Lightweight repo bootstrap & hygiene toolkit

⚡ rebo is a developer-oriented CLI tool that helps you **bootstrap new repositories quickly** and **automatically check /补 fill documentation, CI, and project structure hygiene**.

It supports project scaffolding (Python / Node / C), repo checks, JSON structural diffing, Markdown → PDF conversion, and automatic command indexing — all in one small utility.

---

## ✨ Features

- **`rebo init` — Project scaffolding generator**
  - Profiles: `py-lib`, `node-lib`, `c-lib`, `minimal`
  - Generates README / LICENSE / .gitignore / tests / CI skeletons

- **`rebo doctor` — Repo hygiene checker & auto-fix**
  - Detects missing essential / recommended files
  - `--fix` generates placeholder docs automatically

- **`rebo md2pdf` — Markdown → PDF (subset, no external tools)**
  - Supports headings, lists, fenced code blocks

- **`rebo jsondiff` — Structural JSON diff**
  - Outputs `text`, `json`, or `html` reports

- **`rebo index` — Auto-generate command index**
  - Scans Makefile / npm scripts / pyproject entries
  - Creates `COMMANDS.md` and can link it from README

---

## 🚀 Quickstart

```bash
pip install -e .
rebo --help
```
## Create a Python library skeleton
```bash
rebo init my-lib --profile py-lib --with-ci
```
## Check repo hygiene
```bash
cd my-lib
rebo doctor .
rebo doctor . --fix
```
## JSON diff
```bash
rebo jsondiff examples/old.json examples/new.json --format html --out diff.html
```
## Markdown → PDF
```bash
rebo md2pdf examples/sample.md out.pdf
```
## 🧩 Commands
```bash
rebo init      # project bootstrap
rebo doctor    # hygiene check / autofix
rebo md2pdf    # markdown → pdf
rebo jsondiff  # structured json diff
rebo index     # generate COMMANDS.md
```
## 📦 Profiles (for rebo init)
| Profile    | Description                     |
| ---------- | ------------------------------- |
| `minimal`  | README + .gitignore             |
| `py-lib`   | pyproject + src + tests + CI    |
| `node-lib` | package.json + src + tests + CI |
| `c-lib`    | Makefile + src(.c/.h) + CI      |

## 🛠 Roadmap

- Additional templates (react-app, py-cli)

- Extensible doctor plugin system

- md2pdf image & table support

- jsondiff ignore-path / threshold options

- Template customization flags

---
## 🤝 Contributing

PRs and Issues are welcome 🙂
You can start by running rebo doctor --fix to generate recommended project docs.
---
## 📜 License

MIT License

