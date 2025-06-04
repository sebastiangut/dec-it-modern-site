'use client'

// Simple admin interface for content management
// This is a basic implementation - in production, use a proper CMS

import { useState } from 'react'
import { cms } from './content'

interface ContentEditorProps {
  type: 'page' | 'service' | 'industry' | 'blog'
  id?: string
}

export function ContentEditor({ type, id }: ContentEditorProps) {
  const [content, setContent] = useState({
    title: '',
    description: '',
    content: '',
  })

  const handleSave = async () => {
    try {
      await cms.updateContent(type, id || 'new', content)
      alert('Content saved successfully!')
    } catch (error) {
      alert('Error saving content')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Edit {type}</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={content.title}
            onChange={(e) => setContent({ ...content, title: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={content.description}
            onChange={(e) => setContent({ ...content, description: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <textarea
            value={content.content}
            onChange={(e) => setContent({ ...content, content: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            rows={10}
          />
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Save
        </button>
      </div>
    </div>
  )
}

// Export a simple admin dashboard component
export function AdminDashboard() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8">Content Management</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass rounded-lg p-6">
          <h3 className="font-semibold mb-2">Pages</h3>
          <p className="text-sm text-gray-600">Manage static pages</p>
        </div>

        <div className="glass rounded-lg p-6">
          <h3 className="font-semibold mb-2">Services</h3>
          <p className="text-sm text-gray-600">Edit service offerings</p>
        </div>

        <div className="glass rounded-lg p-6">
          <h3 className="font-semibold mb-2">Industries</h3>
          <p className="text-sm text-gray-600">Update industry content</p>
        </div>

        <div className="glass rounded-lg p-6">
          <h3 className="font-semibold mb-2">Blog</h3>
          <p className="text-sm text-gray-600">Create blog posts</p>
        </div>
      </div>
    </div>
  )
}
