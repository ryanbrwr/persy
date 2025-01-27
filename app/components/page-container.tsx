export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-12">
      <div className="flex flex-col justify-start items-start w-full max-w-screen-xl gap-6 grow">
        {children}
      </div>
    </main>
  );
}
