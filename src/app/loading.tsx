export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
