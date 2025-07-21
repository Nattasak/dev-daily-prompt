// src/app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Copy, Check } from 'lucide-react'

interface Prompt {
  title: string
  text: string
  category: string
}

const prompts: Prompt[] = [
  {
    title: '🧹 Refactor for Maintainability',
    text: 'Refactor this code to be modular, readable, and easy to maintain. Add clear function names and comments where necessary.',
    category: 'Maintainability & Refactoring'
  },
  {
    title: '✨ Clean Code Simplification',
    text: 'Clean this code to remove unnecessary complexity, nested conditions, or repeated logic. Make it easier to read.',
    category: 'Maintainability & Refactoring'
  },
  {
    title: '🚀 Optimize Function',
    text: 'Optimize this function for better performance. Avoid unnecessary re-renders, loops, or memory usage where possible.',
    category: 'Performance Optimization'
  },
  {
    title: '🔁 Convert Callback Hell',
    text: 'This code uses deeply nested callbacks. Refactor it to use async/await for better readability and error handling.',
    category: 'Maintainability & Refactoring'
  },
  {
    title: '🧱 Clean Component Structure',
    text: 'Refactor this UI component to follow best practices for structure, naming, and separation of concerns. Ensure state, effects, and render logic are cleanly organized.',
    category: 'Maintainability & Refactoring'
  },
  {
    title: '🧰 Extract Business Logic',
    text: 'Extract business logic from this UI code into separate helper functions or services. Make the component lean and focused on rendering only.',
    category: 'Maintainability & Refactoring'
  },
  {
    title: '🧪 Make Code Testable',
    text: 'Refactor this code to make it more testable. Break large functions into smaller units and reduce tight coupling.',
    category: 'Testing & Debugging'
  },
  {
    title: '📚 Add Docs & Comments',
    text: 'Add helpful inline comments and JSDoc-style documentation to this function or file so future developers can understand it quickly.',
    category: 'Code Understanding & Documentation'
  },
  {
    title: '🔍 Detect Code Smells',
    text: 'Analyze this code for any code smells (e.g. long methods, deep nesting, large classes). Suggest how to fix them.',
    category: 'Maintainability & Refactoring'
  },
  {
    title: '🔄 Modernize Legacy Code',
    text: 'Update this legacy code to follow modern best practices and syntax (e.g. ES6+, async/await, arrow functions).',
    category: 'Maintainability & Refactoring'
  },
  {
    title: '🔐 Implement User Authentication',
    text: 'Generate code for a secure user authentication system including signup, login, and password reset functionalities.',
    category: 'New Feature/Function Development'
  },
  {
    title: '➕ Create REST API Endpoint',
    text: 'Design and implement a new REST API endpoint for a specific resource with CRUD operations and proper error handling.',
    category: 'New Feature/Function Development'
  },
  {
    title: '📱 Build Responsive UI Component',
    text: 'Develop a responsive UI component using modern React/HTML and Tailwind CSS, ensuring it adapts well to different screen sizes.',
    category: 'New Feature/Function Development'
  },
  {
    title: '✅ Write a Data Validation Function',
    text: 'Create a robust data validation function including edge cases and error messages.',
    category: 'New Feature/Function Development'
  },
  {
    title: '✂️ Decompose Large Function',
    text: 'This function is too long. Decompose it into smaller, more focused functions, each with a single responsibility.',
    category: 'Maintainability & Refactoring'
  },
  {
    title: '📐 Introduce Design Pattern',
    text: 'Refactor this code to apply a specific design pattern (e.g., Strategy, Observer, Factory) to improve its flexibility and extensibility.',
    category: 'Maintainability & Refactoring'
  },
  {
    title: '⚡ Optimize Database Query',
    text: 'Analyze this database query and suggest optimizations for better performance, including indexing strategies.',
    category: 'Performance Optimization'
  },
  {
    title: '📝 Write Unit Tests',
    text: 'Write comprehensive unit tests for this function/component using a testing framework (e.g., Jest, React Testing Library) covering all major scenarios and edge cases.',
    category: 'Testing & Debugging'
  },
  {
    title: '🐛 Debug Error/Bug',
    text: 'Analyze this error message and the provided code snippet. Identify the root cause of the bug and suggest a fix.',
    category: 'Testing & Debugging'
  },
  {
    title: '💡 Explain Code Logic',
    text: 'Explain the step-by-step logic of this code snippet in simple terms.',
    category: 'Code Understanding & Documentation'
  },
  {
    title: '📄 Generate API Documentation',
    text: 'Based on this code, generate API documentation for the exposed functions/endpoints, including parameters, return types, and examples.',
    category: 'Code Understanding & Documentation'
  },
  {
    title: '🏛️ Design Database Schema',
    text: 'Design a normalized database schema for an application (e.g., e-commerce, social media) considering scalability and relationships.',
    category: 'Architecture & Design'
  },
  {
    title: '⚙️ Propose Microservice Architecture',
    text: 'Propose a microservice architecture for this monolithic application, identifying potential service boundaries and communication patterns.',
    category: 'Architecture & Design'
  },
  {
    title: '🧙 Ultimate Code Transformation',
    text: 'Perform a comprehensive refactoring and optimization of this legacy function. Ensure the resulting code is clean, highly readable, easily testable, and adheres to modern best practices in [language/framework]. Focus on improving performance, modularity, and maintainability, and provide explanations for key changes.',
    category: 'Multi-purpose'
  },
  {
    title: '🔄 Full Stack Feature Development',
    text: 'Develop a complete full-stack feature, including database schema design, API endpoint implementation, and responsive UI components for [feature name].',
    category: 'Multi-purpose'
  },
  {
    title: '📈 Performance & Security Audit',
    text: 'Conduct a thorough audit of this application for performance bottlenecks and security vulnerabilities. Provide detailed recommendations and code examples for improvements.',
    category: 'Multi-purpose'
  },
  {
    title: '📚 Codebase Onboarding & Documentation',
    text: 'Generate a comprehensive onboarding guide for new developers joining this codebase. Include architecture overview, key modules, setup instructions, and essential documentation.',
    category: 'Multi-purpose'
  },
  {
    title: '📖 Code Summary & Explanation',
    text: 'Analyze the provided code snippet and summarize its purpose, main logic, and any key conditions or flows in simple, easy-to-understand terms. Focus on what the code does and how it achieves its goal.',
    category: 'Code Understanding & Documentation'
  }
]

const categoryOrder = [
  'New Feature/Function Development',
  'Maintainability & Refactoring',
  'Testing & Debugging',
  'Code Understanding & Documentation',
  'Performance Optimization',
  'Multi-purpose',
  'Architecture & Design',
]

const categories = Array.from(new Set(prompts.map(p => p.category))).sort((a, b) => {
  const indexA = categoryOrder.indexOf(a)
  const indexB = categoryOrder.indexOf(b)

  if (indexA === -1 && indexB === -1) {
    return a.localeCompare(b)
  }
  if (indexA === -1) {
    return 1
  }
  if (indexB === -1) {
    return -1
  }
  return indexA - indexB
})

export default function Home() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Maintainability & Refactoring')

  // Load selected category from localStorage on component mount
  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory')
    if (savedCategory) {
      setSelectedCategory(savedCategory)
    }
  }, [])

  // Save selected category to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory)
  }, [selectedCategory])

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedPrompt(text)
    setTimeout(() => setCopiedPrompt(null), 1500)
  }

  const filteredPrompts = prompts.filter(prompt => prompt.category === selectedCategory)

  return (
    <main className="p-6">
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="rounded-lg"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPrompts.map((prompt) => (
          <Card
            key={prompt.title}
            className={`hover:shadow-lg transition-all cursor-pointer rounded-lg ${
              copiedPrompt === prompt.text ? 'bg-green-50/50 dark:bg-green-900/50' : ''
            }`}
            onClick={() => handleCopy(prompt.text)}
          >
            <CardContent className="py-0 px-5">
              <h2 className={`text-lg font-semibold mb-2 ${
                copiedPrompt === prompt.text ? 'text-green-700 dark:text-green-300' : ''
              }`}>
                {prompt.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-3">{prompt.text}</p>
              <div className="flex justify-end items-center">
                <Button variant="secondary" size="icon" className="rounded-md">
                  {copiedPrompt === prompt.text ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
