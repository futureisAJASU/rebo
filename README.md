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


🇰🇷 rebo — 가벼운 레포 부트스트랩 & 위생 점검 툴

⚡ rebo는 새 레포를 빠르게 생성하고, 문서 / CI / 구조 상태를 자동 점검·보완해 주는 개발자용 CLI 도구입니다.
Python / Node / C 프로젝트 템플릿 생성부터, 레포 위생 진단, JSON 구조 비교, Markdown→PDF 변환까지 한 번에 제공합니다.

✨ 주요 기능

rebo init — 프로젝트 스캐폴딩 생성

프로필: py-lib, node-lib, c-lib, minimal

README / LICENSE / .gitignore / tests / CI 자동 생성

rebo doctor — 레포 위생 점검 & 자동 보정

필수/권장 파일 누락 탐지

--fix 로 placeholder 문서 자동 생성

rebo md2pdf — Markdown → PDF 변환 (부분 지원)

헤더 / 리스트 / 코드블록 지원

외부 도구 없이 reportlab 기반

rebo jsondiff — 구조 기반 JSON 비교

text / json / html 리포트 출력

rebo index — 커맨드 엔트리 자동 인덱싱

Makefile / npm scripts / pyproject 탐색

COMMANDS.md 생성 & README 링크 추가 옵션

🚀 빠른 시작
pip install -e .
rebo --help

파이썬 라이브러리 템플릿 생성
rebo init my-lib --profile py-lib --with-ci

레포 위생 점검
cd my-lib
rebo doctor .
rebo doctor . --fix

JSON 비교
rebo jsondiff examples/old.json examples/new.json --format html --out diff.html

Markdown → PDF
rebo md2pdf examples/sample.md out.pdf

🧩 명령어 요약
rebo init
rebo doctor
rebo md2pdf
rebo jsondiff
rebo index

📦 프로필 (for rebo init)
프로필	설명
minimal	README + .gitignore
py-lib	pyproject + src + tests + CI
node-lib	package.json + src + tests + CI
c-lib	Makefile + src(.c/.h) + CI
🛠 로드맵

 react-app / py-cli 템플릿 추가

 doctor 플러그인 확장

 md2pdf 이미지/테이블 지원

 jsondiff ignore-path / threshold 옵션

 템플릿 커스터마이저

🤝 기여

PR / Issue 환영합니다 🙂
doctor --fix 로 권장 문서를 자동 생성한 뒤 시작해 보세요.

📜 라이선스

MIT License
