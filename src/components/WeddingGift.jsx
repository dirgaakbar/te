import { useState } from 'react'

const WeddingGift = ({ bankAccounts }) => {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section className="relative py-20 px-6 bg-warm-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Amplop Digital
          </h2>
          <div className="border-t border-gold-300 w-24 mx-auto mb-2"></div>
          <p className="text-gray-600 font-sans text-sm mt-4">
            Doa restu Anda merupakan karunia yang tidak ternilai bagi kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bankAccounts.map((account, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gold-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-serif text-gray-800">
                  {account.bankName}
                </h3>
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <span className="text-gold-600 font-serif text-lg">
                    {account.bankName.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gold-600 font-sans text-xs tracking-wider mb-1">
                    Nomor Rekening
                  </p>
                  <div className="flex items-center justify-between bg-warm-cream rounded-lg p-3">
                    <p className="text-gray-800 font-sans text-lg font-mono">
                      {account.accountNumber}
                    </p>
                    <button
                      onClick={() => copyToClipboard(account.accountNumber, index)}
                      className="text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      {copiedIndex === index ? (
                        <span className="text-xs">✓</span>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-gold-600 font-sans text-xs tracking-wider mb-1">
                    Atas Nama
                  </p>
                  <p className="text-gray-800 font-sans text-lg">
                    {account.accountName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingGift
