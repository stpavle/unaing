"use client";

import { useState, useRef, useEffect } from "react";

const LANGUAGES = [
  { id: "serbian", label: "Srpski", flag: "🇷🇸" },
  { id: "bosnian", label: "Bosanski", flag: "🇧🇦" },
  { id: "montenegrin", label: "Crnogorski", flag: "🇲🇪" },
  { id: "croatian", label: "Hrvatski", flag: "🇭🇷" },
];

interface TranslationEntry {
  id: number;
  originalText: string;
  translations: Record<string, string>;
  selectedLanguages: string[];
  timestamp: Date;
}

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    LANGUAGES.map((l) => l.id)
  );
  const [history, setHistory] = useState<TranslationEntry[]>([]);
  const [isTranslating, setIsTranslating] = useState(false);
  const historyEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const toggleLanguage = (langId: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(langId)
        ? prev.filter((id) => id !== langId)
        : [...prev, langId]
    );
  };

  const handleTranslate = async () => {
    const text = inputText.trim();
    if (!text || selectedLanguages.length === 0 || isTranslating) return;

    setIsTranslating(true);

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, languages: selectedLanguages }),
      });

      const data = await res.json();

      if (data.results) {
        const entry: TranslationEntry = {
          id: Date.now(),
          originalText: text,
          translations: data.results,
          selectedLanguages: [...selectedLanguages],
          timestamp: new Date(),
        };
        setHistory((prev) => [...prev, entry]);
        setInputText("");
      }
    } catch {
      // silently fail
    } finally {
      setIsTranslating(false);
      textareaRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleTranslate();
    }
  };

  const getLangLabel = (id: string) =>
    LANGUAGES.find((l) => l.id === id)?.label ?? id;

  const getLangFlag = (id: string) =>
    LANGUAGES.find((l) => l.id === id)?.flag ?? "";

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Prevodilac
          </h1>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            SR / BS / ME / HR → EN
          </span>
        </div>
      </header>

      {/* Language selector */}
      <div className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-3xl flex-wrap gap-2 px-4 py-3">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.id}
              onClick={() => toggleLanguage(lang.id)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedLanguages.includes(lang.id)
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              {lang.flag} {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-4">
          {history.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center text-zinc-400 dark:text-zinc-600">
              <svg
                className="mb-4 h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                />
              </svg>
              <p className="text-lg font-medium">Unesite tekst za prevod</p>
              <p className="mt-1 text-sm">
                Izaberite jezike i unesite tekst ispod
              </p>
            </div>
          )}

          {history.map((entry) => (
            <div key={entry.id} className="mb-6">
              {/* Original text */}
              <div className="mb-2 flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-md bg-blue-600 px-4 py-3 text-white">
                  <p className="whitespace-pre-wrap">{entry.originalText}</p>
                </div>
              </div>

              {/* Translations */}
              <div className="flex justify-start">
                <div className="max-w-[85%] space-y-2">
                  {entry.selectedLanguages.map((langId) => (
                    <div
                      key={langId}
                      className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm dark:bg-zinc-800"
                    >
                      <div className="mb-1 flex items-center gap-1.5">
                        <span className="text-xs">
                          {getLangFlag(langId)}
                        </span>
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          {getLangLabel(langId)} → English
                        </span>
                      </div>
                      <p className="whitespace-pre-wrap text-zinc-900 dark:text-zinc-100">
                        {entry.translations[langId]}
                      </p>
                    </div>
                  ))}
                  <p className="text-xs text-zinc-400 dark:text-zinc-600">
                    {entry.timestamp.toLocaleTimeString("sr-Latn-RS", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div ref={historyEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="sticky bottom-0 border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-3xl items-end gap-2 px-4 py-3">
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Unesite tekst na srpskom, bosanskom, crnogorskom ili hrvatskom..."
            rows={2}
            className="flex-1 resize-none rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          />
          <button
            onClick={handleTranslate}
            disabled={!inputText.trim() || selectedLanguages.length === 0 || isTranslating}
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600"
          >
            {isTranslating ? (
              <svg
                className="h-5 w-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            )}
          </button>
        </div>
        <p className="mx-auto max-w-3xl px-4 pb-2 text-xs text-zinc-400 dark:text-zinc-600">
          Enter za slanje, Shift+Enter za novi red
        </p>
      </div>
    </div>
  );
}
