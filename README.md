# SBA Loan Calculator

A modern, SEO-friendly SBA loan calculator built with Next.js, TypeScript, and Tailwind CSS. Calculate monthly payments, interest rates, and eligibility for SBA 7(a) and 504 loans.

## Features

- Interactive loan calculator with real-time updates
- Support for both SBA 7(a) and 504 loans
- Detailed loan type information and comparisons
- Comprehensive FAQ section
- Mobile-responsive design
- Internationalization support (English and Chinese)
- SEO optimized

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- next-intl for internationalization
- Heroicons for icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sba-loan-calculator.git
cd sba-loan-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       └── sba-loan-calculator/
│   │           └── page.tsx
│   ├── components/
│   │   ├── calculators/
│   │   │   └── SBACalculator.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── LoanTypesSection.tsx
│   └── lib/
├── messages/
│   ├── en.json
│   └── zh.json
├── public/
├── middleware.ts
└── package.json
```

## Internationalization

The application supports both English and Chinese languages. The language is automatically detected based on the user's browser settings or can be manually selected via the URL:

- English: `/en/sba-loan-calculator`
- Chinese: `/zh/sba-loan-calculator`

## SEO Features

- Semantic HTML structure
- Meta tags optimization
- Structured data for rich snippets
- Mobile-first design
- Fast loading times
- Canonical URLs
- Language alternates

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
