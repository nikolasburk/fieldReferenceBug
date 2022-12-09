import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {



  const updatedPost = await prisma.post.update({
    where: { id: 1},
    data: {
      published: !prisma.post.fields.published
    }
  })
  console.log(`updated post`, updatedPost)
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
