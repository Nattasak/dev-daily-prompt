'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const prompts = [
  {
    title: '🧹 Refactor for Maintainability',
    text: 'Refactor this code to be modular, readable, and easy to maintain. Add clear function names and comments where necessary.'
  },
  {
    title: '✨ Clean Code Simplification',
    text: 'Clean this code to remove unnecessary complexity, nested conditions, or repeated logic. Make it easier to read.'
  },
  {
    title: '🚀 Optimize Function',
    text: 'Optimize this function for better performance. Avoid unnecessary re-renders, loops, or memory usage where possible.'
  },
  {
    title: '🔁 Convert Callback Hell',
    text: 'This code uses deeply nested callbacks. Refactor it to use async/await for better readability and error handling.'
  },
  {
    title: '🧱 Clean Component Structure',
    text: 'Refactor this UI component to follow best practices for structure, naming, and separation of concerns. Ensure state, effects, and render logic are cleanly organized.'
  },
  {
    title: '🧰 Extract Business Logic',
    text: 'Extract business logic from this UI code into separate helper functions or services. Make the component lean and focused on rendering only.'
  },
  {
    title: '🧪 Make Code Testable',
    text: 'Refactor this code to make it more testable. Break large functions into smaller units and reduce tight coupling.'
  },
  {
    title: '📚 Add Docs & Comments',
    text: 'Add helpful inline comments and JSDoc-style documentation to this function or file so future developers can understand it quickly.'
  },
  {
    title: '🔍 Detect Code Smells',
    text: 'Analyze this code for any code smells (e.g. long methods, deep nesting, large classes). Suggest how to fix them.'
  },
  {
    title: '🔄 Modernize Legacy Code',
    text: 'Update this legacy code to follow modern best practices and syntax (e.g. ES6+, async/await, arrow functions).'
  }
]

export default function Home() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedPrompt(text)
    setTimeout(() => setCopiedPrompt(null), 1500)
  }

  return (
    <main className="p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {prompts.map((prompt) => (
        <Card key={prompt.title} className="hover:shadow-md transition-all cursor-pointer" onClick={() => handleCopy(prompt.text)}>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">{prompt.title}</h2>
            <p className="text-sm text-muted-foreground mb-3">{prompt.text}</p>
            <Button variant="secondary" size="sm">{copiedPrompt === prompt.text ? 'Copied!' : 'Copy to Clipboard'}</Button>
          </CardContent>
        </Card>
      ))}
    </main>
  )
}
