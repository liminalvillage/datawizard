Home folder: ReGenerativa/

# DW Project Instructions v3.6

## Tools
You have Obsidian MCP tools. Use them directly - never ask
the user to copy/paste vault content. Tools load lazily -
run tool_search to load any tool before first use. Use
descriptive queries (short/vague terms may miss tools).

Load all needed tools during orientation with these calls:
  tool_search "obsidian read_note write_note patch_note replace"
  tool_search "obsidian list_directory search_notes get_frontmatter"
  tool_search "obsidian update_frontmatter move_note manage_tags"

If obsidian:read_note returns "File not found" for a path
that obsidian:list_directory shows exists, fall back to
filesystem tools with the full absolute path. This is a
known intermittent MCP issue.

## Working Rules
1. WRITE TO VAULT: New content as .md - never draft markdown
   in chat. Share plan first, get approval, then write.
2. EDITS: Show specific changes in chat first. Never reprint
   the whole document. Once approved, write to vault.
3. RE-READ BEFORE WRITING: Always re-read the file immediately
   before writing. Another user or agent may have changed it.
4. CHUNK: Break multi-step plans into chunks. Present each,
   get approval, execute, check in before next.
5. VERIFY: Confirm success after any write/patch/move before
   retrying. Silent success + retry = duplicate content.
6. ASK: When uncertain about anything, ask rather than assume.
7. LARGE FILES: Files >5000 words - suggest chunking into
   shell + section folder before editing. Also when READING
   a file that's notably long or gets truncated, proactively
   suggest sectioning it. Don't just work around the size -
   flag it as a candidate for the shell + sections pattern.
8. SAFE CHARACTERS: In note titles, use plain hyphens (-)
   never em-dashes, and straight quotes never curly quotes.
   Never use Windows-invalid characters in filenames:
   ? | * < > " \ : tab, non-breaking space (\xa0), or
   carriage return. Collapse consecutive spaces to one.
   Strip trailing whitespace before extensions. In content,
   avoid em-dashes and curly quotes in headings and text
   you expect to patch. They cause patch_note to fail.
   See Seed/Guides/Filename Safety.md for the full map.
9. LIFECYCLE SKILLS: Before any lifecycle transition (project
   setup, session close), read and follow the governing skill
   (e.g. project-guidelines, session-closer). Do not write
   lifecycle artifacts from pattern-matching.
10. MCP WRITE VERIFICATION: At session close, verify all
   writes and patches landed using filesystem tools (Read or
   Glob on the vault path), not obsidian:read_note. If
   filesystem tools are unavailable, request vault access via
   request_cowork_directory. If context compaction is
   approaching and unverified writes risk falling out of
   context, verify those writes before compaction rather than
   waiting for session close. Flag to the user only if
   verification fails.
11. MCP CONCURRENCY: When multiple instances run on the same
   project, the session log shell (0.2 file) is a shared
   resource. Patch it only at session close, verify
   immediately, and if verification fails, retry once before
   flagging the user.
12. DOCUMENT METADATA: When writing to any file, bump the
   updated: date. When creating or substantially updating
   content documents, consider adding priority:
   (high/medium/low) and maturity:
   (draft/working/polished/canonical) to frontmatter.
   See YAML Schema (Protocol Section 4) for definitions.

## Skills
Seed Skills (general skills applicable to all projects) live
in _DataWizard/Seed/Skills/. Project-specific skills live in
the project home folder under Skills/.
Read the full SKILL.md before using any skill. Follow it
completely. Skills apply to lifecycle transitions (session
close, project setup) not just content tasks.

Seed Skills:
  session-closer: End-of-session log entry, learnings, handoff.
  project-guidelines: Creating or updating 0.0 Project Guidelines.
  research-tracking: Tracking research to prevent duplicate work.
  tools-research: Evaluating external tools, repos, frameworks.
  design-harvest: Planting research findings into design docs.
  transcript-harvest: Harvesting transcripts into project docs.
  document-harvest: Harvesting articles/clippings into project docs.

See _DataWizard/Seed/SKILLS.md for full catalog.

## Orientation (once per thread)
1. Fetch VERSION.md from GitHub API:
   https://api.github.com/repos/andrewalan11/DataWizard/contents/VERSION.md
   The API returns JSON - decode the base64 "content" field.
   Compare against local _DataWizard/Seed/VERSION.md.
   Follow the instructions in VERSION.md for any mismatches
   (Seed version, project instructions version).
   If GitHub is unreachable, continue with local Seed.
2. Read 0.0 Project Guidelines in full (project context).
3. Read 0.2 Session Log (last 2-3 entries only). The most
   recent "What's next" section tells you where to pick up.
4. Read action items file if one exists.
5. State the session number and propose a thread name.
   Format: ProjectAbbrev SNN - expected focus (no date).
   Base it on "What's next" and any user direction.
6. Lifecycle transitions (project setup, session close)
   are skill-governed. Read the skill before executing.
7. Ready to work. Read Seed docs (protocols, taxonomy,
   skills, guides) as needed for specific tasks.
