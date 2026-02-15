"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Buttonのバリアント定義
 * SmartHR UIを参考にしたバリアントシステム
 */
const buttonVariants = cva(
  // ベーススタイル - すべてのボタンに適用
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        // Primary: メインアクション（送信、保存など）
        primary:
          "bg-[var(--color-primary)] text-[var(--color-text-on-dark)] hover:opacity-90 active:opacity-80 shadow-sm",
        
        // Secondary: サブアクション（キャンセル、戻るなど）
        secondary:
          "bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-grey-5)] active:bg-[var(--color-grey-6)] shadow-sm",
        
        // Outline: 強調の少ないアクション
        outline:
          "border border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:bg-opacity-10 active:bg-opacity-20",
        
        // Ghost: 最小限のスタイル（編集、コピーなど）
        ghost:
          "text-[var(--color-text-primary)] hover:bg-[var(--color-grey-5)] active:bg-[var(--color-grey-6)]",
        
        // Link: リンクスタイル
        link:
          "text-[var(--color-text-link)] underline-offset-4 hover:underline h-auto p-0",
        
        // Danger: 危険なアクション（削除、解除など）
        danger:
          "bg-[var(--color-danger)] text-[var(--color-text-on-dark)] hover:opacity-90 active:opacity-80 shadow-sm",
        
        // Success: 成功・完了アクション
        success:
          "bg-[var(--color-success)] text-[var(--color-text-on-dark)] hover:opacity-90 active:opacity-80 shadow-sm",
        
        // Warning: 警告アクション
        warning:
          "bg-[var(--color-warning)] text-[var(--color-grey-100)] hover:opacity-90 active:opacity-80 shadow-sm",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10 p-0",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * 子要素をSlotとしてレンダリングするか
   * true の場合、Buttonのpropsが子要素にマージされます
   * 
   * @example
   * <Button asChild>
   *   <Link href="/about">About</Link>
   * </Button>
   */
  asChild?: boolean
}

/**
 * Button コンポーネント
 * 
 * アクセシビリティ、インタラクション、視覚的フィードバックを
 * 備えた汎用ボタンコンポーネント
 * 
 * @example
 * // 基本的な使い方
 * <Button>送信</Button>
 * 
 * @example
 * // バリアントとサイズの指定
 * <Button variant="danger" size="sm">削除</Button>
 * 
 * @example
 * // フルワイド
 * <Button fullWidth>送信</Button>
 * 
 * @example
 * // Linkなど他の要素として
 * <Button asChild>
 *   <Link href="/about">About</Link>
 * </Button>
 * 
 * @example
 * // アイコンボタン
 * <Button size="icon" variant="ghost">
 *   <IconName />
 * </Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
