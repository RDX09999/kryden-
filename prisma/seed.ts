import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.homepageSection.upsert({
    where: { key: "hero" },
    update: {},
    create: {
      key: "hero",
      title: "KRYDEN Hero",
      subtitle: "Seeded content",
      payload: {
        note: "Replace with CMS-driven data from the admin dashboard."
      }
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
