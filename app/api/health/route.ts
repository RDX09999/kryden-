export async function GET() {
  return Response.json({ ok: true, service: "kryden", timestamp: new Date().toISOString() });
}
