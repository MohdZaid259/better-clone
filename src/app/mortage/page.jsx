"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

function MortagePage() {
  const [homePrice, setHomePrice] = useState(1176800)
  const [zipCode, setZipCode] = useState("226012")
  const [downPayment, setDownPayment] = useState(60000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [includeUtilities, setIncludeUtilities] = useState(true)
  const [isUtilitiesExpanded, setIsUtilitiesExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const fixedValues = {
    water: 30,
    gas: 25,
    internet: 50,
  }

  function handleCalculate(){
    const principal = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    const monthlyPrincipalAndInterest =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const propertyTax = 265
    const homeInsurance = 132
    const hoaFees = 132
    const utilityTotal = includeUtilities ? Object.values(fixedValues).reduce((a, b) => a + b, 0) : 0

    return {
      total: Math.round(monthlyPrincipalAndInterest + propertyTax + homeInsurance + hoaFees + utilityTotal),
      principalAndInterest: Math.round(monthlyPrincipalAndInterest),
      propertyTax,
      homeInsurance,
      hoaFees,
      utilityTotal,
    }
  }

  const monthlyPayment = handleCalculate()

  function handleDownPaymentChange(){
    setDownPayment(value)
    setDownPaymentPercent(Math.round((value / homePrice) * 100))
  }

  function handleDownPaymentPercentChange(){
    setDownPaymentPercent(value)
    setDownPayment(Math.round((value / 100) * homePrice))
  }

  function handleCopyLink(){
    const params = new URLSearchParams({
      price: homePrice.toString(),
      down: downPayment.toString(),
      rate: interestRate.toString(),
      term: loanTerm.toString(),
      utilities: includeUtilities.toString(),
    })
    navigator.clipboard.writeText(`${window.location.origin}?${params.toString()}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Mortgage calculator</h1>
        <p className="text-muted-foreground">
          Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private
          mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Home price</label>
          <div className="mt-1.5">
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="text-2xl font-semibold"
              prefix="$"
            />
          </div>
          <Slider
            value={[homePrice]}
            min={100000}
            max={2000000}
            step={1000}
            onValueChange={([value]) => setHomePrice(value)}
            className="mt-4"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Monthly payment</label>
          <div className="mt-1.5 text-2xl font-semibold">${monthlyPayment.total.toLocaleString()}/mo</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div>
          <label className="text-sm font-medium">ZIP code</label>
          <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="mt-1.5" />
        </div>

        <div>
          <label className="text-sm font-medium">Down payment</label>
          <div className="relative mt-1.5">
            <input
              type="number"
              value={downPayment}
              onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
              prefix="$"
            />
            <input
              type="number"
              value={downPaymentPercent}
              onChange={(e) => handleDownPaymentPercentChange(Number(e.target.value))}
              suffix="%"
              className="absolute right-0 top-0 w-24"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Interest rate</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            suffix="%"
            step={0.125}
            className="mt-1.5"
          />
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Monthly payment breakdown</h2>
        <div className="space-y-4">
          <div className="text-2xl font-semibold">${monthlyPayment.total.toLocaleString()}/mo</div>

          <div className="relative h-8 rounded-full overflow-hidden bg-muted">
            <div
              className="absolute inset-y-0 left-0 bg-primary"
              style={{
                width: `${(monthlyPayment.principalAndInterest / monthlyPayment.total) * 100}%`,
              }}
            />
            <div
              className="absolute inset-y-0 bg-blue-500"
              style={{
                left: `${(monthlyPayment.principalAndInterest / monthlyPayment.total) * 100}%`,
                width: `${(monthlyPayment.propertyTax / monthlyPayment.total) * 100}%`,
              }}
            />
            <div
              className="absolute inset-y-0 bg-purple-500"
              style={{
                left: `${((monthlyPayment.principalAndInterest + monthlyPayment.propertyTax) / monthlyPayment.total) * 100}%`,
                width: `${(monthlyPayment.homeInsurance / monthlyPayment.total) * 100}%`,
              }}
            />
            <div
              className="absolute inset-y-0 bg-yellow-500"
              style={{
                left: `${((monthlyPayment.principalAndInterest + monthlyPayment.propertyTax + monthlyPayment.homeInsurance) / monthlyPayment.total) * 100}%`,
                width: `${(monthlyPayment.hoaFees / monthlyPayment.total) * 100}%`,
              }}
            />
            {includeUtilities && (
              <div
                className="absolute inset-y-0 bg-red-500"
                style={{
                  left: `${((monthlyPayment.principalAndInterest + monthlyPayment.propertyTax + monthlyPayment.homeInsurance + monthlyPayment.hoaFees) / monthlyPayment.total) * 100}%`,
                  width: `${(monthlyPayment.utilityTotal / monthlyPayment.total) * 100}%`,
                }}
              />
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span>Principal & interest</span>
              </div>
              <span className="font-medium">${monthlyPayment.principalAndInterest.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Property taxes</span>
              </div>
              <span className="font-medium">${monthlyPayment.propertyTax}</span>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span>Homeowners insurance</span>
              </div>
              <span className="font-medium">${monthlyPayment.homeInsurance}</span>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span>HOA fees</span>
              </div>
              <span className="font-medium">${monthlyPayment.hoaFees}</span>
            </div>

            <div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span>Utilities</span>
                </div>
                <span className="font-medium">${monthlyPayment.utilityTotal}</span>
              </div>

              {isUtilitiesExpanded && (
                <div className="ml-5 mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span>Water/Sewer</span>
                    <span className="font-medium">${fixedValues.water}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gas</span>
                    <span className="font-medium">${fixedValues.gas}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Internet</span>
                    <span className="font-medium">${fixedValues.internet}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="utilities" className="text-sm">
              Include utilities in payment
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button variant="outline" onClick={handleCopyLink} className="flex items-center gap-2">
          {copied ? "Copied!" : "Copy estimate link"}
        </button>
        <button>Get pre-approved</button>
      </div>
    </div>
  )
}

export default MortagePage