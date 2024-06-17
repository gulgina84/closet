import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'johndoe@example.com',
      password: 'securepassword123',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      items: {
        create: [
          {
            image: 'https://www.mrporter.com/variants/images/1647597320356943/in/w2000_q60.jpg',
          },
          {
            image: 'https://i5.walmartimages.com/asr/8aafff36-86ba-446c-a64e-42b779375320.af069ebeae387a0d486a033b06129b4f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
          },
        ],
      },
    },
  });

  console.log({ userId: user.id });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });