import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from './components/ui/button'

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.20),_transparent_60%)] px-6 py-20 text-slate-50 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl border border-white/10 bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur xl:p-16">
        <div className="flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-300">
          <Sparkles className="h-4 w-4" />
          Vite + React + Tailwind + shadcn-style UI
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            A polished landing experience, ready to grow.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400 sm:text-xl">
            This starter includes a modern React app, Tailwind styling, and a reusable button component inspired by shadcn/ui conventions.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg">Get started</Button>
          <Button variant="outline" size="lg">
            View docs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}

export default App
