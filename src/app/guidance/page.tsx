// src/app/guidance/page.tsx
// This is a Server Component by default, so we don't need 'use client'

import { Card, CardContent } from "@/components/ui/card";
import { PromptGuidance } from "@/components/prompt-guidance";

export default function GuidancePage() {
  return (
    <main className="p-6">
      <PromptGuidance />
    </main>
  );
}
