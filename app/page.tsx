export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>MP3 to Text</h1>
        <p>Upload an MP3 and get an instant transcript using OpenAI Whisper. A simple Next.js app that turns podcasts into plain text.
        </p>
      </main>
    </div>
  );
}
