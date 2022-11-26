import FormatCurrency from 'components/FormatCurrency'
import { FC, ComponentProps } from 'react'

type FormatCryptoProps = {
  address?: string
  logoWidth?: number
}

const API_BASE =
  process.env.NEXT_PUBLIC_RESERVOIR_API_BASE || 'https://api.reservoir.tools'

type Props = ComponentProps<typeof FormatCurrency> & FormatCryptoProps

const FormatCrypto: FC<Props> = ({
  amount,
  maximumFractionDigits,
  address,
  logoWidth = 16,
}) => {
  let logoUrl: string
  if (address === '0x68b7e050e6e2c7efe11439045c9d49813c1724b8') {
    logoUrl = 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=023'
  } else {
    logoUrl = `${API_BASE}/redirect/currency/${address}/icon/v1`
  }

  return (
    <FormatCurrency
      amount={amount}
      maximumFractionDigits={maximumFractionDigits}
    >
      {address && (
        <img
          src={logoUrl}
          alt="Currency Logo"
          style={{ width: `${logoWidth}px` }}
        />
      )}
    </FormatCurrency>
  )
}

export default FormatCrypto
