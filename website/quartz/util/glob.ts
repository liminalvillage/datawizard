import path from "path"
import { FilePath } from "./path"
import { globby } from "globby"

export function toPosixPath(fp: string): string {
  return fp.split(path.sep).join("/")
}

export async function glob(
  pattern: string,
  cwd: string,
  ignorePatterns: string[],
): Promise<FilePath[]> {
  const fps = (
    await globby(pattern, {
      cwd,
      ignore: ignorePatterns,
      // Patched: rely solely on Quartz `ignorePatterns`. Honoring .gitignore
      // here would hide the build-time `website/content/` copy of the vault
      // (which is intentionally gitignored), yielding 0 input files.
      gitignore: false,
    })
  ).map(toPosixPath)
  return fps as FilePath[]
}
