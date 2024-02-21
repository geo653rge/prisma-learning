import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() 
{

    await prisma.user.create({
        data: {
          name: 'Rich',
          email: 'hello@prisma.com',
          posts: {
            create: {
              title: 'My first post',
              body: 'Lots of really interesting stuff',
              slug: 'my-first-post',
            }
          },
        },
      })
      await prisma.user.create({
        data: {
          name: 'George',
          email: 'george@gmail.com',
          posts: {
            create: {
              title: 'Oh my',
              body: 'Hey you',
              slug: 'I am good',
            }
          },
        },
      })
      await prisma.user.create({
        data: {
          name: 'Kimani',
          email: 'I am good',
          posts: {
            create: {
              title: 'My second guy',
              body: 'Kimani',
              slug: 'my-first-post',
            }
          },
        },
      })

      const allUsers = await prisma.user.findMany({
        include: {
          posts: true,
        },
      })
      console.dir(allUsers, { depth: null })
    

}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })