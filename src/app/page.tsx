import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-text-[var(--color-text-primary)]">
            Design System
          </h1>
          <p className="text-text-[var(--color-text-secondary)] font-bold text-xl">
            SmartHR UIを参考にした、Next.js + Tailwind CSSのデザインシステム
          </p>
        </div>

        {/* Button Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-[var(--color-text-primary)]">
            Button Variants
          </h2>
          
          <div className="space-y-6">
            {/* Primary */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-[var(--color-text-secondary)]">
                Primary - メインアクション
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">送信</Button>
                <Button variant="primary">ログイン</Button>
                <Button variant="primary">次へ</Button>
              </div>
            </div>

            {/* Secondary */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-[var(--color-text-secondary)]">
                Secondary - サブアクション
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">キャンセル</Button>
                <Button variant="secondary">戻る</Button>
                <Button variant="secondary">閉じる</Button>
              </div>
            </div>

            {/* Outline */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-[var(--color-text-secondary)]">
                Outline - 強調の少ないアクション
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">詳細を見る</Button>
                <Button variant="outline">もっと見る</Button>
                <Button variant="outline">設定</Button>
              </div>
            </div>

            {/* Ghost */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-[var(--color-text-secondary)]">
                Ghost - 最小限のスタイル
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost">編集</Button>
                <Button variant="ghost">コピー</Button>
                <Button variant="ghost">共有</Button>
              </div>
            </div>

            {/* Link */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-[var(--color-text-secondary)]">
                Link - リンクスタイル
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="link">ヘルプ</Button>
                <Button variant="link">利用規約</Button>
                <Button variant="link">詳しく見る</Button>
              </div>
            </div>

            {/* Danger */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-[var(--color-text-secondary)]">
                Danger - 危険なアクション
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="danger">削除</Button>
                <Button variant="danger">アカウント削除</Button>
                <Button variant="danger">解除</Button>
              </div>
            </div>

            {/* Success */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-[var(--color-text-secondary)]">
                Success - 成功・完了アクション
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="success">保存完了</Button>
                <Button variant="success">送信成功</Button>
              </div>
            </div>

            {/* Warning */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-[var(--color-text-secondary)]">
                Warning - 警告アクション
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="warning">注意が必要</Button>
                <Button variant="warning">確認してください</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-[var(--color-text-primary)]">
            Button Sizes
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" variant="primary">Small</Button>
            <Button size="md" variant="primary">Medium</Button>
            <Button size="lg" variant="primary">Large</Button>
          </div>
        </section>

        {/* Button States */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-[var(--color-text-primary)]">
            Button States
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Normal</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="secondary">Normal</Button>
            <Button variant="secondary" disabled>Disabled</Button>
            <Button variant="danger">Normal</Button>
            <Button variant="danger" disabled>Disabled</Button>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-[var(--color-text-primary)]">
            Color Palette
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <ColorSwatch name="Primary" colorVar="--color-primary" />
            <ColorSwatch name="Danger" colorVar="--color-danger" />
            <ColorSwatch name="Warning" colorVar="--color-warning" />
            <ColorSwatch name="Success" colorVar="--color-success" />
            <ColorSwatch name="Brand" colorVar="--color-brand" />
            <ColorSwatch name="Grey 100" colorVar="--color-grey-100" />
            <ColorSwatch name="Grey 65" colorVar="--color-grey-65" />
            <ColorSwatch name="Grey 20" colorVar="--color-grey-20" />
          </div>
        </section>
      </main>
    </div>
  );
}

/* カラースウォッチコンポーネント */
function ColorSwatch({ name, colorVar }: { name: string; colorVar: string }) {
  return (
    <div className="space-y-2">
      {/* 動的なCSS変数参照のためinline styleが必要 */}
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div
        className="h-20 rounded-md[var(--radius-md)] border [var(--color-border)]"
        style={{ backgroundColor: `var(${colorVar})` }}
      />
      <p className="text-sm text-text-[var(--color-text-secondary)]">{name}</p>
    </div>
  );
}
