'use client'

import { useState } from 'react'

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [transcript, setTranscript] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError('Please select an MP3 file.')
      return
    }

    setLoading(true)
    setError(null)
    setTranscript(null)

    // Placeholder for Step 5
    setTimeout(() => {
      setTranscript('[Transcript placeholder]')
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="max-w-xl mx-auto p-6 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-2">MP3 to Text</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Upload an .mp3 and get a transcript back
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="file"
            accept=".mp3,audio/mpeg"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-800 dark:text-gray-100 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 dark:file:border-gray-600 file:rounded file:bg-white dark:file:bg-gray-800 file:text-sm file:cursor-pointer"
          />
        </div>
        <div>
        <button
          type="submit"
          disabled={!file || loading}
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Uploading...' : 'Upload'}
        </button>

        </div>
      </form>

      {error && <p className="mt-4 text-red-600 dark:text-red-400">{error}</p>}

      {transcript && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
          <p className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-100">
            {transcript}
          </p>
        </div>
      )}
    </main>
  )
}
