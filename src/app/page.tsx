import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-foreground">
          Next.js + TypeScript + Tailwind + shadcn/ui
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern React framework with beautiful UI components
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">shadcn/ui Button Examples</h2>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
