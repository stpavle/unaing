import { NextRequest, NextResponse } from "next/server";

const LANG_CODES: Record<string, string> = {
  serbian: "sr",
  bosnian: "bs",
  montenegrin: "sr", // Montenegrin uses Serbian code
  croatian: "hr",
};

export async function POST(request: NextRequest) {
  const { text, languages } = await request.json();

  if (!text || !languages || !Array.isArray(languages) || languages.length === 0) {
    return NextResponse.json({ error: "Missing text or languages" }, { status: 400 });
  }

  const results: Record<string, string> = {};

  const translations = await Promise.all(
    languages.map(async (lang: string) => {
      const langCode = LANG_CODES[lang];
      if (!langCode) return { lang, translation: null, error: "Unknown language" };

      try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langCode}|en`;
        const res = await fetch(url);
        const data = await res.json();

        const translation = data.responseData?.translatedText || null;
        return { lang, translation };
      } catch {
        return { lang, translation: null, error: "Translation failed" };
      }
    })
  );

  for (const t of translations) {
    results[t.lang] = t.translation || `[Error translating from ${t.lang}]`;
  }

  return NextResponse.json({ results });
}
