# 💱 Currency Converter

A real-time currency converter web app built with React.js that lets you convert between any two world currencies instantly.

![Currency Converter](screenshot.png)

## 🌐 Live Demo
(https://currency-converter-ten-livid.vercel.app)

## ✨ Features

- 🔄 Convert between 150+ world currencies in real time
- 🏳️ Country flags displayed for each currency
- 🔁 Swap button to instantly switch between from/to currencies
- 📡 Live exchange rates fetched from a free currency API

## 🛠️ Tech Stack

- **React.js** — UI and component architecture
- **Custom Hooks** — `useCurrencyInfo` for clean API logic separation
- **Tailwind CSS** — styling and responsive design
- **Currency API** — live exchange rates from [currency-api](https://github.com/fawazahmed0/exchange-api)
- **FlagCDN** — country flags for each currency

## 📁 Project Structure

```
src/
├── components/
│   ├── InputBox.jsx       # Reusable input component with currency selector
│   └── CustomSelect.jsx   # Custom dropdown with country flags
├── hooks/
│   └── useCurrencyInfo.js # Custom hook for fetching exchange rates
└── App.jsx                # Main app component with conversion logic
```

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/arpityadav21/currency-converter.git

# Navigate to project folder
cd currency-converter

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 💡 How It Works

1. User selects a **source currency** and enters an amount
2. `useCurrencyInfo` custom hook fetches live rates from the API using `useEffect`
3. On clicking Convert, the amount is multiplied by the exchange rate
4. Swap button switches both currencies and amounts in one click

## 👨‍💻 Author

**Arpit Yadav**
2nd Year CSE Student
- GitHub: [@arpityadav21](https://github.com/arpityadav21)
