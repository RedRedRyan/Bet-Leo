'use client'
import React from 'react'
import  {WalletMultiButton} from '@demox-labs/aleo-wallet-adapter-reactui'
function ConnectButton() {
  return (
    <WalletMultiButton className="bg-yellow text-black font-bold px-6 py-3 rounded-lg hover:bg-black hover:text-yellow transition-all duration-300" />
  )
}

export default ConnectButton