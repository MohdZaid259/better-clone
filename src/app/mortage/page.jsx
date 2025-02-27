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
      <div className="bg-[#F0F7F1]">
        <div className="w-3/4 mx-auto p-14 space-y-8">
          <div>
            <h1 className="text-4xl font-semibold mb-4">Mortgage calculator</h1>
            <p className="text-sm text-gray-600 w-3/5">
              Our mortgage calculator includes key factors like homeowners
              association fees, property taxes, and private mortgage insurance
              (PMI). Get the whole picture and calculate your total monthly
              payment.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-[auto_auto_auto] items-end">
            <div className="">
              <label className="text-sm font-medium">Home price</label>
              <div className="mt-1.5">
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="text-3xl outline-none border border-black rounded-md p-3 font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Monthly payment</label>
              <div className="mt-1.5 text-3xl py-3 font-semibold">
                ${monthlyPayment.total.toLocaleString()}/mo
              </div>
            </div>

            <span className="bg-[#017848] px-6 py-3 max-w-max rounded-lg font-semibold cursor-pointer hover:bg-[#116242] text-white duration-100">
              Get pre-approved
            </span>
          </div>
          <Slider
            value={[homePrice]}
            min={50000}
            max={3000000}
            step={1000}
            onValueChange={([value]) => setHomePrice(value)}
            className="mt-4 mx-5 "
          />

          <div className="flex gap-20 justify-between items-center">
            <div className="flex gap-2 justify-center items-center">
              <div className="bg-white hover:border-4 hover:border-green-700 border-4 px-2 rounded-md ">
                <label className="text-xs text-gray-600">ZIP code</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="font-semibold  outline-none"
                />
              </div>

              <div className="bg-white hover:border-4 hover:border-green-700 border-4 px-2 rounded-md ">
                <label className="text-xs text-gray-600">Down payment</label>
                <div className="relative">
                  <input
                    className=" outline-none"
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
                    className="absolute right-0 text-end  outline-none top-0 w-24"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <div className="bg-white hover:border-4 hover:border-green-700 border-4 px-2 rounded-md ">
                <label className="text-xs text-gray-600">Interest rate</label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  suffix="%"
                  step={0.125}
                  className=" outline-none"
                />
              </div>

              <div className="bg-white hover:border-4 hover:border-green-700 border-4 px-2 rounded-md ">
                <label className="text-xs text-gray-600">Length of Loan</label>
                <input
                  type="string"
                  value={lengthOfLoan}
                  onChange={(e) => setLengthOfLoan(Number(e.target.value))}
                  suffix="%"
                  step={0.125}
                  className=" outline-none"
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
                <span className="border border-black p-2 px-4 rounded text-sm font-medium">
                  $     {monthlyPayment.propertyTax}
                </span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center text-xs text-gray-800  gap-2">
                  <div className="w-1 h-4 rounded-full bg-[#8E8EEB]" />
                  <span>Homeowners insurance</span>
                </div>
                <span className="border border-black p-2 px-4 rounded text-sm font-medium">
                  $     {monthlyPayment.homeInsurance}
                </span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center text-xs text-gray-800  gap-2">
                  <div className="w-1 h-4 rounded-full bg-[#FFD566]" />
                  <span>HOA fees</span>
                </div>
                <span className="border border-black p-2 px-4 rounded text-sm font-medium">
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