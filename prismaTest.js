const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Example: Create a new user
  const newUser = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  });
  console.log('New User:', newUser);
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
