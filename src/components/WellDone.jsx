import { Note } from '@/components/mdx'

export function WellDone(props) {
  return (
    <Note>
      You succesfully used the new .env.vault standard to encrypt and deploy your secrets. This is much safer than scattering your secrets across multiple third-party platforms and tools. Whenever you need to add or change a secret, just rebuild your .env.vault file and redeploy.
    </Note>
  )
}
