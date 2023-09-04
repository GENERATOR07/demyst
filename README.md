# Balance Sheet API

The Balance Sheet API provides endpoint to retrieve  balance sheet data. This API allows you to fetch balance sheets for a business.

## Endpoints

- `POST /api/balance-sheet` - Retrieve the balance sheet for a business.
- curl --location 'http://localhost:3000/api/balance-sheet' \
--header 'Content-Type: application/json' \
--data '{
  "business_name": "Acme Corporation",
  "year_established": "2005",
  "summary": "Leading provider of innovative solutions",
  "accounting_provider": "Smith & Co. Accounting Services",
  "loan_amount": "50000"
  }

# Submit Loan Application API

The Submit Loan Application API allows users to submit loan applications for final assessment.
`POST /api/submit-application` - Retrieve final result for loan application.
curl --location 'http://localhost:3000/api/submit-application' \
--header 'Content-Type: application/json' \
--data '{
  "business_name": "Acme Corporation",
  "year_established": "2005",
  "summary": "Leading provider of innovative solutions",
  "accounting_provider": "Smith & Co. Accounting Services",
  "loan_amount": "50000",
  "balance_sheet":[
  {
    "year": 2022,
    "month": 1,
    "profitOrLoss": 15000,
    "assetsValue": 125000
  },
  {
    "year": 2022,
    "month": 2,
    "profitOrLoss": 12000,
    "assetsValue": 132000
  },
  {
    "year": 2022,
    "month": 3,
    "profitOrLoss": -5000,
    "assetsValue": 126000
  },
  {
    "year": 2022,
    "month": 4,
    "profitOrLoss": 18000,
    "assetsValue": 145000
  },
  {
    "year": 2022,
    "month": 5,
    "profitOrLoss": 9000,
    "assetsValue": 152000
  },
  {
    "year": 2022,
    "month": 6,
    "profitOrLoss": -8000,
    "assetsValue": 144000
  },
  {
    "year": 2022,
    "month": 7,
    "profitOrLoss": 22000,
    "assetsValue": 166000
  },
  {
    "year": 2022,
    "month": 8,
    "profitOrLoss": 13000,
    "assetsValue": 179000
  },
  {
    "year": 2022,
    "month": 9,
    "profitOrLoss": -15000,
    "assetsValue": 164000
  },
  {
    "year": 2022,
    "month": 10,
    "profitOrLoss": 25000,
    "assetsValue": 189000
  },
  {
    "year": 2022,
    "month": 11,
    "profitOrLoss": 11000,
    "assetsValue": 196000
  },
  {
    "year": 2022,
    "month": 12,
    "profitOrLoss": 32000,
    "assetsValue": 215000
  }
]


  


}
'

