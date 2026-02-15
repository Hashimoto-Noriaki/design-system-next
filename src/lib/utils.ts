import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * クラス名を統合するユーティリティ関数
 * Tailwind CSSのクラスを適切にマージし、競合を解決します
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
