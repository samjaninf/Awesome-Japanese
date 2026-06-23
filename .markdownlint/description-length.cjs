// Custom markdownlint rule: cap the length of list-item descriptions.
//
// Awesome-list entries look like:  - [Name](url) - Description.
// We flag a description that exceeds `maximum` characters, counting only the
// VISIBLE description text: inline-link URLs and emoji do not count (matching
// the rule documented in contributing.md). Lines inside fenced code blocks are
// ignored, and entries whose primary link matches `exemptUrls` are skipped.
//
// Config (in .markdownlint.jsonc):
//   "description-length": { "maximum": 100, "exemptUrls": ["pressreader.com"] }

"use strict";

// - [Name](primaryUrl) - description...   (primaryUrl captured in group 1)
const ENTRY = /^\s*[-*]\s+\[[^\]]*\]\(([^)]*)\)\s+-\s+(.*\S)\s*$/;
const INLINE_LINK = /\[([^\]]*)\]\([^)]*\)/g; // [text](url) -> text
const EMOJI_SHORTCODE = /:[a-z0-9_+-]+:/g; // :baby:, :older_man:
// Rough but practical emoji / pictograph / variation-selector ranges.
const EMOJI_UNICODE =
  /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{2190}-\u{21FF}\u{2300}-\u{23FF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}]/gu;

function visibleDescription(raw) {
  return raw
    .replace(INLINE_LINK, "$1")
    .replace(EMOJI_SHORTCODE, "")
    .replace(EMOJI_UNICODE, "")
    .replace(/\s+/g, " ")
    .trim();
}

module.exports = {
  names: ["AJ001", "description-length"],
  description:
    "Item description exceeds the character limit (visible text, excluding emoji and link URLs)",
  tags: ["awesome-japanese", "length"],
  parser: "none",
  function: function descriptionLength(params, onError) {
    const config = params.config || {};
    const maximum = Number.isFinite(config.maximum) ? config.maximum : 100;
    const exemptUrls = Array.isArray(config.exemptUrls) ? config.exemptUrls : [];

    let inFence = false;
    params.lines.forEach((line, index) => {
      // Track fenced code blocks (``` or ~~~) so examples aren't flagged.
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        return;
      }
      if (inFence) return;

      const match = ENTRY.exec(line);
      if (!match) return;

      const [, primaryUrl, rawDescription] = match;
      if (exemptUrls.some((u) => primaryUrl.includes(u))) return;

      const visible = visibleDescription(rawDescription);
      const length = [...visible].length; // count code points, not UTF-16 units
      if (length > maximum) {
        onError({
          lineNumber: index + 1,
          detail: `Description is ${length} characters (max ${maximum}; emoji and link URLs excluded)`,
          context: visible.length > 60 ? visible.slice(0, 57) + "..." : visible,
        });
      }
    });
  },
};
