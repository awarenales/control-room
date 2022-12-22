import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create dummy user
  const user1 = await prisma.user.upsert({
    where: { email: 'ze.ninguem@uol.com.br' },
    update: {},
    create: {
      email: 'ze.ninguem@uol.com.br',
      name: 'Zé Ninguém',
      country: 'Brasil',
      state: 'Acre',
      city: 'Acrelândia',
      cep: '69945-000',
      street: 'Rua dos Bobos',
      number: '0',
      cpf: '15555097204',
      pis: '27098267819',
      password: 'SenhaSegura10/10',
    },
  });

  console.log({ user1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
