'use client'
import { useContractWrite, useAccount, useWaitForTransaction } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { ButtonUI } from '@/components/ui/button'
import { toast } from 'sonner'
import { useEffect } from 'react'
import { useLanguage } from '@/app/languageProvider'
const ClaimTokens = ({ boolean }: { boolean: boolean }): JSX.Element => {
  const { address } = useAccount()
  const { language } = useLanguage()
  const { write, data } = useContractWrite({
    address: contract,
    abi: AbyContractAddress,
    account: address,
    functionName: 'claimTokens'
  })
  const { status } = useWaitForTransaction({
    hash: data?.hash
  })
  console.log(status)
  useEffect(() => {
    if (status === 'success') {
      toast.success('AYNI transferred', {
        style: { background: 'green', color: '#FFF' }
      })
      window.location.reload()
    }
  }, [status])

  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Claim',
      es: 'Reclamar',
      pt: 'Reivindicar'
    }
  }

  return (
        <ButtonUI
          className='uppercase w-11/12 bg-sky-500 rounded-2xl border-none text-white'
          variant={'outline'}
          disabled={!boolean}
          onClick={() => {
            write()
          }
          }
        >
          {text[1][language]}
        </ButtonUI>
  )
}

export default ClaimTokens
