import fs from 'fs/promises';
import path from 'path';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing'; // your locale list
import { hasLocale } from 'next-intl';

// 🧠 In-memory cache (to avoid re-reading files)
const messagesCache = new Map<string, Record<string, any>>();

async function loadMessages(locale: string) {
  if (messagesCache.has(locale)) {
    return messagesCache.get(locale)!;
  }

  const dirPath = path.join(process.cwd(), 'messages', locale);
  const files = await fs.readdir(dirPath);

  const messages: Record<string, any> = {};

  for (const file of files) {
    const namespace = file.replace('.json', '');
    const filePath = path.join(dirPath, file);
    const content = await fs.readFile(filePath, 'utf-8');
    messages[namespace] = JSON.parse(content);
  }

  messagesCache.set(locale, messages);
  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await loadMessages(locale);

  return {
    locale,
    messages
  };
});
