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
  const [lengthOfLoan, setLengthOfLoan] = useState('30 years')

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

  return (
    <>
      <div className="bg-[#F0F7F1] p-6 md:p-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Mortgage Calculator</h1>
          <p className="text-base md:text-sm text-gray-600 md:w-3/5">
          Our mortgage calculator includes key factors like homeowners association fees, property taxes, and PMI.
          </p>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 items-center">
          <div className="flex flex-col">
            <label className="text-base md:text-sm font-medium">Home Price</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full text-xl md:text-3xl outline-none border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] rounded-md p-5 md:p-3  font-semibold"
            />
          </div>
          <div>
            <label className="text-base md:text-sm font-medium">Monthly Payment</label>
            <div className="mt-1.5 text-lg md:text-3xl font-semibold">${monthlyPayment.total.toLocaleString()}/mo</div>
          </div>
          <button className="bg-[#017848] px-4 py-5 md:px-6 md:py-3 rounded-lg font-semibold text-white hover:bg-[#116242] duration-100">
            Get Pre-approved
          </button>
        </div>
        
        <Slider
          value={[homePrice]}
          min={50000}
          max={3000000}
          step={1000}
          onValueChange={([value]) => setHomePrice(value)}
          className="mt-4 mx-5"
        />


          <div className="flex gap-20 justify-between items-center">
            <div className="flex gap-2 justify-center items-center">
              <div className="bg-white border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] px-2 rounded-md ">
                <label className="text-xs text-gray-600">ZIP code</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="font-semibold bg-transparent outline-none"
                />
              </div>

              <div className="bg-white border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] px-2 rounded-md ">
                <label className="text-xs text-gray-600">Down payment</label>
                <div className="relative">
                  <input
                    className="bg-transparent outline-none"
                    type="number"
                    value={downPayment}
                    onChange={(e) =>
                      handleDownPaymentChange(Number(e.target.value))
                    }
                  />
                  <input
                    type="number"
                    value={downPaymentPercent}
                    onChange={(e) =>
                      handleDownPaymentPercentChange(Number(e.target.value))
                    }
                    className="bg-transparent absolute right-0 text-end  outline-none top-0 w-24"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <div className="bg-white border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] px-2 rounded-md ">
                <label className="text-xs text-gray-600">Interest rate</label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  suffix="%"
                  step={0.125}
                  className="bg-transparent outline-none"
                />
              </div>

              <div className="bg-white border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] px-2 rounded-md ">
                <label className="text-xs text-gray-600">Length of Loan</label>
                <input
                  type="string"
                  value={lengthOfLoan}
                  onChange={(e) => setLengthOfLoan(Number(e.target.value))}
                  suffix="%"
                  step={0.125}
                  className="bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 m-auto p-14 flex justify-between items-start ">
        <div className="w-2/5">
          <h2 className="text-sm text-gray-800 font-semibold mb-4"> Monthly payment breakdown </h2>
          <div className="space-y-4">
            <div className="text-4xl text-gray-800 font-semibold">
              ${monthlyPayment.total.toLocaleString()}/mo
            </div>
          </div>
          
          <div className="relative h-14 mt-10 overflow-hidden bg-muted">
            <div
              className="absolute rounded-full inset-y-0 left-0 bg-[#017848]"
                  style={{
                    width: `${
                      (monthlyPayment.principalAndInterest /
                        monthlyPayment.total) *
                      100
                    }%`,
              }}
            />
            <div
              className="absolute rounded-full inset-y-0 bg-[#6E4CF6]"
                  style={{
                    left: `${
                      (monthlyPayment.principalAndInterest /
                        monthlyPayment.total) *
                      100
                    }%`,
                    width: `${
                      (monthlyPayment.propertyTax / monthlyPayment.total) * 100
                    }%`,
              }}
            />
            <div
              className="absolute rounded-full inset-y-0 bg-[#8E8EEB]"
                  style={{
                    left: `${
                      ((monthlyPayment.principalAndInterest +
                        monthlyPayment.propertyTax) /
                        monthlyPayment.total) *
                      100
                    }%`,
                    width: `${
                      (monthlyPayment.homeInsurance / monthlyPayment.total) * 100
                    }%`,
              }}
            />
            <div
              className="absolute rounded-full inset-y-0 bg-[#FFD566]"
                  style={{
                    left: `${
                      ((monthlyPayment.principalAndInterest +
                        monthlyPayment.propertyTax +
                        monthlyPayment.homeInsurance) /
                        monthlyPayment.total) *
                      100
                    }%`,
                    width: `${
                      (monthlyPayment.hoaFees / monthlyPayment.total) * 100
                    }%`,
              }}
            />
            {includeUtilities && (
              <div
                className="absolute rounded-full inset-y-0 bg-[#FE8B72]"
                    style={{
                      left: `${
                        ((monthlyPayment.principalAndInterest +
                          monthlyPayment.propertyTax +
                          monthlyPayment.homeInsurance +
                          monthlyPayment.hoaFees) /
                          monthlyPayment.total) *
                        100
                      }%`,
                      width: `${
                        (monthlyPayment.utilityTotal / monthlyPayment.total) * 100
                      }%`,
                }}
              />
            )}
          </div>
        </div>

        <div className="w-1/2 ">
            <div className="flex flex-col justify-between gap-5">
              <div className="flex justify-between">
                <div className="flex items-center text-xs text-gray-800 gap-2">
                  <div className="w-1 h-4 rounded-full bg-[#017848]" />
                  <span>Principal & interest</span>
                </div>
                <span className="text-sm font-medium">
                  ${monthlyPayment.principalAndInterest.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center text-xs text-gray-800  gap-2">
                  <div className="w-1 h-4 rounded-full bg-[#6E4CF6]" />
                  <span>Property taxes</span>
                </div>
                <span className="bg-white border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] p-2 px-4 rounded text-sm font-medium">
                  $     {monthlyPayment.propertyTax}
                </span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center text-xs text-gray-800  gap-2">
                  <div className="w-1 h-4 rounded-full bg-[#8E8EEB]" />
                  <span>Homeowners insurance</span>
                </div>
                <span className="bg-white border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] p-2 px-4 rounded text-sm font-medium">
                  $     {monthlyPayment.homeInsurance}
                </span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center text-xs text-gray-800  gap-2">
                  <div className="w-1 h-4 rounded-full bg-[#FFD566]" />
                  <span>HOA fees</span>
                </div>
                <span className="bg-white border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] p-2 px-4 rounded text-sm font-medium">
                  $     {monthlyPayment.hoaFees}
                </span>
              </div>

              <div>
                <div className="flex justify-between">
                  <div className="flex items-center text-xs text-gray-800  gap-2">
                    <div className="w-1 h-4 rounded-full bg-[#FE8B72]" />
                    <span>Utilities</span>
                  </div>
                  <span className="text-sm font-medium">
                    ${monthlyPayment.utilityTotal}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex mt-5 gap-2 items-center justify-start">
              <input type="checkbox" />
              <label htmlFor="utilities" className="text-sm">
                Include utilities in payment
              </label>
            </div>

            <div className="p-4 bg-gray-200 rounded-md max-w-max text-sm hover:bg-gray-300 font-semibold mt-10">
              Copy estimate link
            </div>
        </div>
      </div>
    </>
  );
}

export default MortagePage