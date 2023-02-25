import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

const updateProfileBodySchema = z.object({
  bio: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PUT') {
    return res.status(405).end()
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }
  // retorna os dados tipados e dispara um erro  se os dados vierem errados, usar o safeParse para tratar o erro
  const { bio } = updateProfileBodySchema.parse(req.body)

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        bio,
      },
    })
  } catch (error) {
    console.log(error)
  }

  return res.status(204).end()
}
