export default function SignInPage() {
  return (
    <main className="mx-auto grid min-h-[70vh] max-w-3xl place-items-center px-4 py-16">
      <section className="kryden-card w-full rounded-[32px] p-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Sign in to KRYDEN</h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          Connect Clerk or Auth.js here for email login, Google login, and OTP flows.
        </p>
        <div className="mt-8 rounded-[28px] border border-dashed border-slate-300 p-8 text-sm text-slate-500 dark:border-slate-700">
          Auth UI slot
        </div>
      </section>
    </main>
  );
}
