import React from 'react'

function Timeline() {
  const Events = [
    {
      year: 2014,
      content:
        "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
      position: "left",
    },
    {
      year: 2015,
      content: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
      position: "right",
    },
    {
      year: 2016,
      content:
        "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors",
      position: "left",
    },
    {
      year: 2017,
      content: "Better expands into the real estate market with Better Real Estate",
      position: "right",
    },
    {
      year: 2018,
      content: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
      position: "left",
    },
    {
      year: 2019,
      content: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
      position: "right",
    },
    {
      year: 2021,
      content: "Better acquires Trussle — The UK’s most innovative online mortgage broker.",
      position: "left",
    },
    {
      year: 2022,
      content: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online..",
      position: "right",
    },
    {
      year: 2023,
      content: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
      position: "left",
    },
    {
      year: null,
      content: "Better Mortgage launches the fully digital 3-day HELOC².",
      position: "right",
    },
    {
      year: null,
      content: "Better Mortgage launches One Day Verified Approval Letter.",
      position: "left",
    },
    {
      year: 'Today',
      content: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
      position: "right",
    }
  ]

  return (
    <div className="relative max-w-2xl mx-auto px-4 py-8">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#DFE0DC]" />
      <div className="relative space-y-8">
        {Events.map((event,id) => (
          <div key={id} className="relative grid grid-cols-[1fr,auto,1fr] gap-4 items-start">
            <div className={event.position === "left" ? "text-right pr-4" : "invisible"}>
              {event.content && (
                <p className="text-xs text-gray-600 bg-[#DFE0DC] p-4 text-start rounded-lg inline-block">{event.content}</p>
              )}
            </div>
            <div className="relative flex justify-center">
              {event.year && <div className="bg-[#017848] text-white font-semibold px-6 py-2 rounded-full">{event.year}</div>}
            </div>
            <div className={event.position === "right" ? "pl-4" : "invisible"}>
              {event.content && (
                <p className="text-xs text-gray-600 bg-[#DFE0DC] text-start p-4 rounded-lg inline-block">{event.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline