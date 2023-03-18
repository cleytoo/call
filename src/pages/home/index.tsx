import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import { ClaimUsernameForm } from './components/ClaimUsernameForm'

import { Container, Hero, Preview } from './styles'

import previewImg from '@/assets/app-preview.png'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Call"
        description="
        Conecte seu calendário e permita que as pessoas marquem agendamentos
        no seu tempo livre."
      />
      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="lg">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImg}
            height={400}
            quality={100}
            priority
            alt="Agendamento descomplicado"
          />
        </Preview>
      </Container>
    </>
  )
}
