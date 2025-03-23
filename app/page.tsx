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

    // Placeholder logic — we’ll replace this with a real API call in Step 5
    setTimeout(() => {
      setTranscript('[Transcript placeholder]')
      setLoading(false)
    }, 1000)
  }

  return (
    <main>
      <h1>mp3-to-text</h1>
      <p>Upload your .mp3 and get the transcript back.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            accept=".mp3,audio/mpeg"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
        <div>
          <button type="submit" disabled={!file || loading}>
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </form>

      {error && <p>{error}</p>}
      {transcript && (
        <div>
          <p>{transcript}</p>
        </div>
      )}
    </main>
  )
}
