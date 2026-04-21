import { useState } from "react"

function CustomSelect({ options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* Button showing selected currency */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <img 
          src={`https://flagcdn.com/24x18/${selected.slice(0, 2)}.png`}
          alt={selected}
        />
        {selected.toUpperCase()}
      </button>

      {/* Dropdown list — only shows when isOpen is true */}
      {isOpen && (
        <div className="absolute bg-white shadow-lg rounded-lg mt-1 max-h-48 overflow-y-scroll z-10">
          {options.map((currency) => (
            <div
              key={currency}
              onClick={() => {
                onSelect(currency)
                setIsOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={`https://flagcdn.com/24x18/${currency.slice(0, 2)}.png`}
                alt={currency}
              />
              {currency.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelect