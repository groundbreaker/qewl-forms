export const apiSchema = {
  "enums": [
    {
      "kind": "ENUM",
      "name": "MetricsType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACCOUNT_METRICS_DEALS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ACCOUNT_METRICS_DISTRIBUTIONS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ACCOUNT_METRICS_INVESTOR_ACCOUNTS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ACCOUNT_METRICS_INVESTMENT_ENTITIES",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CONTACT_METRICS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ACCOUNT_METRICS_DASHBOARD",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DEAL_METRICS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTMENT_ENTITY_METRICS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTOR_ACCOUNT_METRICS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "CurrencyType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "USD",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "AccountStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CANCELED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SUSPENDED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TRIAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "ContactEmailLabel",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "WORK",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "HOME",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OTHER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "ContactPhoneLabel",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "WORK",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MOBILE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "HOME",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FAX_WORK",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FAX_HOME",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OTHER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "ContactStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "APPROVED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DENIED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ON_HOLD",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PENDING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "UserStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "UNCONFIRMED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CONFIRMED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ARCHIVED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "COMPROMISED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "UNKNOWN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "RESET_REQUIRED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FORCE_CHANGE_PASSWORD",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "UserGroups",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "GB_ADMIN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MANAGER_OWNER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MANAGER_ADMIN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MANAGER_USER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MANAGER_BETA",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTOR",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTOR_BETA",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "TypicalInvestment",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "TIER_ONE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TIER_TWO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TIER_THREE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "AnnualInvestment",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "TIER_ONE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TIER_TWO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TIER_THREE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestmentObjectives",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "GROWTH",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LIQUIDITY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INCOME",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "PropertyType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "OFFICE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "RETAIL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INDUSTRIAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "HOTEL_MOTEL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "RESIDENTIAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LAND",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "AGRICULTURAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SENIOR_HOUSING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SPECIAL_PURPOSE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SPORT_ENTERTAINMENT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MULTI_FAMILY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "HOSPITAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "USRegion",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "NATIONWIDE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NW",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SW",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MIDWEST",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "HoldingPeriod",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ONE_TWO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TWO_FIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SIX_NINE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TEN_PLUS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "RiskTolerance",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "HIGH",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MODERATE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LOW",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "AssetType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "EQUITY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DEBT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FUND",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "MembershipType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "MANAGER_OWNER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MANAGER_ADMIN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MANAGER_USER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTOR",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "DistributableType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ELIGIBLE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INELIGIBLE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestmentStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "PROSPECT_ADDED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PROSPECT_CONTACTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PROSPECT_INTERESTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OFFER_PENDING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OFFER_APPROVED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OFFER_REJECTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OFFER_WITHDRAWN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SUBSCRIPTION_PENDING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SUBSCRIPTION_SUBMITTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SUBSCRIPTION_MISSING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SUBSCRIPTION_INCOMPLETE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SUBSCRIPTION_APPROVED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FUNDING_READY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FUNDING_SENT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FUNDING_PENDING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FUNDING_RECEIVED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FUNDING_FAILED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTMENT_COMPLETE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "DealType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "SINGLE_ASSET",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MULTI_ASSET",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "DealAccessType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "INVITE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PRIVATE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PUBLIC",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "FundType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "OPEN_END",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CLOSED_END",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "HoldTimeType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "YEARS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MONTHS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DAYS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "DebtType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "BRIDGE_LOAN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CASH_HARD_MONEY_LOAN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CONSTRUCTION_LOAN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LAND_LOAN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LINE_OF_CREDIT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PERMANANT_LOAN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MORTGAGE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SENIOR_NOTES",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "IRRType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "GROSS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NET",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "DealStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ARCHIVED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CANCELED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DRAFT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FUNDRAISING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OPERATING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "REALIZED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TEASER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "DistributionType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "PRORATA",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PROMOTE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "CashFlowType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACCRUAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ADDITIONAL_CASH_FLOW",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CASH",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DIVIDEND",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "GAINS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INTEREST",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "IN_KIND",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OPERATING_INCOME",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OTHER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_RETURN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "REFINANCE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "RETURN_OF_CAPITAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "RETURN_ON_CAPITAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SALE_PROCEEDS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "DistributionNoticeStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "CREATED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DRAFT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SCHEDULED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SENT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DELIVERED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "DistributionStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "INITIATED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PENDING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CANCELED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CONFIRMED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DECLINED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FAILED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "COMPLETED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestorAccountType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "CORP",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "EBP",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INDIVIDUAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "IRA",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "JOINT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LLC",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PARTNERSHIP",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TRUST",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "TaxIdTypeSSNandEIN",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "SSN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "EIN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "JointOwnershipType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "TENANCY_IN_COMMON",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "COMMUNITY_PROPERTY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TENANCY_BY_THE_ENTIRETY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "JOINT_TENANCY_WITH_RIGHT_OF_SURVIVORSHIP",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OTHER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "PaymentMethodType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACH",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CHECK",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "WIRE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "BankAccountType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "CHECKING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SAVINGS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "BankAccountOwnerType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "BUSINESS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PERSONAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "BankAccountStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "FAILED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PENDING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SUSPENDED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "UNVERIFIED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "VERIFIED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "TaxIdType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "SSN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "EIN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ITIN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestmentStructure",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "EQUITY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DEBT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FUND",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestmentStrategy",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACQUISITION",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CORE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CORE_PLUS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DEVELOPMENT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NEW_CONSTRUCTION",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OPPORTUNISTIC",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "VALUE_ADD",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestmentEntityStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "FileType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "DOCUMENT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DOCUMENT_PHOTO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "FileCategory",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "CAPITAL_ACCOUNT_STATEMENTS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CAPITAL_CALL_NOTICE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DILIGENCE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DISTRIBUTION_NOTICE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FINANCIAL_STATEMENTS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "GENERAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LEGAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MARKETING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "REPORTS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TAX",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "FileStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SCHEDULED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "AccreditationType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "BUSINESS_ACCREDITATION",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INDIVIDUAL_ACCREDITATION",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "AccreditationStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACCREDITED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "UNACCREDITED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "AccreditationMethod",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "QUESTIONNAIRE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "THIRD_PARTY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "FundingType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ROLLING_CLOSE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FUNDING_DATE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "SubscriptionPackageStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "CREATED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "MessageCategory",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ALERT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MARKETING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NOTIFICATION",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TRANSACTIONAL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "MessageType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "EMAIL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MOBILE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "WEB",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "MessageStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "DRAFT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SEND",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SENT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DELIVERED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OPENED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CLICKED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FAILED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "PaymentType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACH",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "WIRE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CHECK",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "PaymentStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "PAYABLE_PENDING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PAYABLE_APPROVED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PAYABLE_SENT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PAYABLE_PAID",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PAYABLE_FAILED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "RECEIVABLE_PENDING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "RECEIVABLE_FAILED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "RECEIVABLE_PAID",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestorAccountStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INACTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PENDING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "DelegateRole",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "INVESTOR",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ADVISOR",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ACCOUNTANT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ATTORNEY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PROXY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "PhotoType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "PHOTO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "Role",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "LIMITED_PARTNER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "GENERAL_PARTNER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "DomainStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "PENDING_DNS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PENDING_SSL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FAILED_DNS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FAILED_SSL",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OK",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "TemplateName",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "OFFER_APPROVED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTOR_SIGNING",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "TemplateStatus",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ENABLED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DISABLED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "ContactDataFilterNames",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "STATUS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "AMOUNT_CONTRIBUTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NUMBER_OF_INVESTMENTS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ASSIGNED_TO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CONTACTS_APPROVED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DISTRIBUTION_METHOD_IS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LOCATED_IN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MADE_AN_INVESTMENT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERED_SECURITY_TYPE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_HOLDING_PERIOD",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_INVESTMENT_CONTRIBUTION_RANGE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_INVESTMENT_OBJECTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_PROPERTY_TYPE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_RISK_TOLERANCE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PROSPECT_FOR",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TAGGED_WITH",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "WITHDRAW_AN_OFFER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "ContactDataFilterOperators",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "EQUAL_TO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NOT_EQUAL_TO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LESS_THAN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "GREATER_THAN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "ContactDataSorts",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "RECENTLY_UPDATED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OLDEST_UPDATE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MOST_CONTRIBUTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MOST_COMMITTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MOST_INVESTMENTS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CONTACTS_A_Z",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "CONTACTS_Z_A",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestmentDataFilterNames",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ASSIGNED_TO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "EXPECTED_NUMBER_OF_INVESTMENTS_IN_THE_NEXT_TWELVE_MONTHS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTMENT_PAYMENT_STATUS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTMENT_STATUS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTOR_ACCOUNT_TYPE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LOCATED_IN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LOCATED_NEAR_INVESTMENT",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_HOLDING_PERIOD",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_INVESTMENT_CONTRIBUTION_RANGE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_INVESTMENT_OBJECTIVE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_PROPERTY_TYPE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PREFERRED_RISK_TOLERANCE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PROSPECT_HAS_BEEN_CONTACTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "TAGGED_WITH",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestmentDataFilterOperators",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "EQUAL_TO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NOT_EQUAL_TO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestmentDataSorts",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "RECENTLY_UPDATED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OLDEST_UPDATE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MOST_CONTRIBUTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MOST_COMMITTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MOST_INVESTMENTS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NAME_A_Z",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NAME_Z_A",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestorAccountDataFilterNames",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "DOES_THE_INVESTMENT_HAVE_A_FEE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ROLE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTOR_ACCOUNT_TYPE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestorAccountDataFilterOperators",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "EQUAL_TO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NOT_EQUAL_TO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestorAccountDataSorts",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "RECENTLY_UPDATED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OLDEST_UPDATE",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MOST_COMMITTED",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MOST_INVESTMENTS",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTOR_ACCOUNT_A_Z",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INVESTOR_ACCOUNT_Z_A",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "TypeaheadType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "Account",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "BankAccount",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "Contact",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "Deal",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "DistributionNotice",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "Distribution",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "File",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "InvestmentEntity",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "InvestorAccount",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "Message",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "Payment",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "Tag",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "Template",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "IRACustodian",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "ADVANTA_IRA_TRUST_SERVICES",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "AMERICAN_ESTATE_TRUST",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "EQUITY_TRUST_COMPANY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MILLENIUM_TRUST_COMPANY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MIDLAND_IRA",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NDIRA_FBO",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "PENSCO_TRUST_COMPANY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "POLYCOMP_TRUST_COMPANY",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SUNWEST_TRUST",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "QUEST_IRA",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OTHER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "TaxIdTypeSSN",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "SSN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "InvestorGroups",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "INVESTOR",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "ManagerGroups",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "MANAGER_OWNER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MANAGER_ADMIN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MANAGER_USER",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "__TypeKind",
      "description": "An enum describing what kind of type a given `__Type` is.",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "SCALAR",
          "description": "Indicates this type is a scalar.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OBJECT",
          "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INTERFACE",
          "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "UNION",
          "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ENUM",
          "description": "Indicates this type is an enum. `enumValues` is a valid field.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INPUT_OBJECT",
          "description": "Indicates this type is an input object. `inputFields` is a valid field.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "LIST",
          "description": "Indicates this type is a list. `ofType` is a valid field.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "NON_NULL",
          "description": "Indicates this type is a non-null. `ofType` is a valid field.",
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "__DirectiveLocation",
      "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "QUERY",
          "description": "Location adjacent to a query operation.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "MUTATION",
          "description": "Location adjacent to a mutation operation.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SUBSCRIPTION",
          "description": "Location adjacent to a subscription operation.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FIELD",
          "description": "Location adjacent to a field.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FRAGMENT_DEFINITION",
          "description": "Location adjacent to a fragment definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FRAGMENT_SPREAD",
          "description": "Location adjacent to a fragment spread.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INLINE_FRAGMENT",
          "description": "Location adjacent to an inline fragment.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "VARIABLE_DEFINITION",
          "description": "Location adjacent to a variable definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SCHEMA",
          "description": "Location adjacent to a schema definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "SCALAR",
          "description": "Location adjacent to a scalar definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "OBJECT",
          "description": "Location adjacent to an object type definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "FIELD_DEFINITION",
          "description": "Location adjacent to a field definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ARGUMENT_DEFINITION",
          "description": "Location adjacent to an argument definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INTERFACE",
          "description": "Location adjacent to an interface definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "UNION",
          "description": "Location adjacent to a union definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ENUM",
          "description": "Location adjacent to an enum definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "ENUM_VALUE",
          "description": "Location adjacent to an enum value definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INPUT_OBJECT",
          "description": "Location adjacent to an input object type definition.",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "INPUT_FIELD_DEFINITION",
          "description": "Location adjacent to an input object field definition.",
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    },
    {
      "kind": "ENUM",
      "name": "TaxIdTypeEIN",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
        {
          "name": "EIN",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null
        }
      ],
      "possibleTypes": null
    }
  ],
    "filterTypes": [
      {
        "kind": "INPUT_OBJECT",
        "name": "AccountFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subdomain",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TableIDFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "ne",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "le",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ge",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "notContains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "between",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "beginsWith",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TableStringFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "ne",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "le",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ge",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "notContains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "between",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "beginsWith",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AccreditationFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "details",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AccreditationDetailsFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "validFor",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "expires",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investorAccount",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AccreditationDetailsFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "trust",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "entity",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "corporation",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "institutional",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "networth",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "income",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TableBooleanFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "ne",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ActivityFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "actor",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ActorFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subject",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "action",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "accountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ActorFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BankAccountFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "routingNumber",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "accountNumber",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "bankAccountType",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "primaryOwner",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BankAccountOwnerFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "beneficialOwners",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "BankAccountOwnerFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentEntityId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investorAccountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BankAccountOwnerFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "firstName",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lastName",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "email",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ownerType",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "businessName",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ipAddress",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ssn",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dateOfBirth",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "passport",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PassportFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "address",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AddressFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PassportFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "passportNumber",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "country",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AddressFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "address1",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "address2",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "city",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "state",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "country",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "postalCode",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "latitude",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "longitude",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "googlePlacesId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContactFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "firstName",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lastName",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "address",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AddressFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "company",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dateOfBirth",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "notes",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "emails",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ContactEmailFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "phones",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ContactPhoneFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "accountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "userId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ownerId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContactEmailFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "address",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "label",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContactPhoneFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "number",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "label",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContactDataFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "ContactDataFilterNames",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "op",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "ContactDataFilterOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "val",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContactTagFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "role",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "contactId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "tagId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DealFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "address",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AddressFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "access",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deadline",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "total",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "propertyType",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "holdTime",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "holdTimeType",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentMin",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "description",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentEntityId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CurrencyFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "value",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TableIntFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "ne",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "le",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ge",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "notContains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "between",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DelegateFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "role",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "contactId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investorAccountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DistributionFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "amount",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "distributionNoticeId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investorAccountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentEntityId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DistributionNoticeFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "cashFlow",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TableStringFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "amount",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "distributed",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "prorata",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DistributionProrataFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "promote",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DistributionPromoteFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dealId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentEntityId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DistributionProrataFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "gpAmount",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lpAmount",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DistributionPromoteFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "promoteGP",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableFloatFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "promoteLP",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableFloatFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "carriedInterest",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TableFloatFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "ne",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "le",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ge",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "notContains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "between",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FileFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "category",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "download",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dealId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentEntityId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investorAccountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subscriptionPackageId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InvestmentEntityFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "taxId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "taxIdType",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "address",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AddressFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "structure",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "strategies",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TableStringFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "accountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InvestmentFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "amount",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "agreed",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "promote",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "closingDate",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "distributable",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dealId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentEntityId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "contactId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investorAccountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InvestmentDataFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "InvestmentDataFilterNames",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "op",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "InvestmentDataFilterOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "val",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InvestorAccountFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "details",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "InvestorAccountDetailsFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "contactId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InvestorAccountDetailsFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "taxIdType",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "taxId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dateOfBirth",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "other",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "accountNumber",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "firstName",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lastName",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InvestorAccountDataFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "InvestorAccountDataFilterNames",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "op",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "InvestorAccountDataFilterOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "val",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MembershipFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MessageFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "senderId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subject",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "body",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "category",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "contactId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentEntityId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "batchId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dealId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PaymentFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "paymentType",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "payeeId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "payorId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dealId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "distributionId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SettingsFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "domain",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "domainStatus",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "summary",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "email",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "phone",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "address",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AddressFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "logo",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "favicon",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "color",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "loginImg",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dealsImg",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "loginMsg",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "welcomeMsg",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "fromName",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "fromEmail",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ga",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "gtm",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "fb",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "accountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubscriptionPackageFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "accreditation",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "commitmentAmount",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CommitmentAmountFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investorLimits",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "InvestorLimitFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "taxDoc",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "formationDoc",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "countersignerId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "eSignature",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "wetSignature",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "fundingAnnouncement",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "fundingDate",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ach",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PaymentMethodACHFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "wire",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PaymentMethodWireFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "check",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PaymentMethodCheckFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dealId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investmentEntityId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CommitmentAmountFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "min",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "max",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InvestorLimitFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "commitmentAmount",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CommitmentAmountFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "investorAccount",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "InvestorAccountFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PaymentMethodACHFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "bankAccountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "enabled",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PaymentMethodWireFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "routingNumber",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "accountNumber",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "enabled",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PaymentMethodCheckFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "address",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AddressFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "enabled",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TagFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "accountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TemplateFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subject",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "body",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "version",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "default",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "status",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "accountId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "attribute",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableAttributeFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TableAttributeFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "startsWith",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ManagerFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "attribute",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableAttributeFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CapitalStackBlockFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "showDebt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "debt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "debtType",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "showMezzanine",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "mezzanine",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "equity",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "notes",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CashOnCashBlockFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "initial",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "stabilized",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "average",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContentBlockFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CostSummaryBlockFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "summary",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CostItemFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "capitalization",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CostItemFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "key",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "value",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ReturnOnEquityRangeBlockFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "from",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "to",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ExitCapitlizationRateBlockFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "from",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "to",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InternalRateOfReturnBlockFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "from",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "to",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ListBlockFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "items",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ListItemFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ListItemFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "key",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "value",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectedSalePriceBlockFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "from",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "to",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CurrencyFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DealSectionFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "info",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ContentBlockFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "list",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ListBlockFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "cost",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CostSummaryBlockFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "stack",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CapitalStackBlockFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "coc",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CashOnCashBlockFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "irr",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "InternalRateOfReturnBlockFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "equityRange",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ReturnOnEquityRangeBlockFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "exit",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ExitCapitlizationRateBlockFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "sale",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectedSalePriceBlockFilterInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InvestorPreferencesFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "typical",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "TypicalInvestment",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "annual",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "AnnualInvestment",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "objectives",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "InvestmentObjectives",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "propertyTypes",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "PropertyType",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "regions",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "USRegion",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "periods",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "HoldingPeriod",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "risk",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "RiskTolerance",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "assetType",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "AssetType",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PhotoFilterInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIDFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "download",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "ordinal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableIntFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "primary",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableBooleanFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "created",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updated",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "deleted",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "dealId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TableStringFilterInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      }
    ],
      "inputTypes": [
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateAccountInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "subdomain",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "AccountStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateAccountInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "AccountStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteAccountInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateBusinessAccreditationInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "BusinessAccreditationInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investorAccountId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "BusinessAccreditationInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "trust",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "entity",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "corporation",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "institutional",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateBusinessAccreditationInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "BusinessAccreditationInput",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateIndividualAccreditationInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "IndividualAccreditationInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investorAccountId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "IndividualAccreditationInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "networth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "income",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateIndividualAccreditationInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "IndividualAccreditationInput",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteAccreditationInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateActivityInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "summary",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "actor",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ActorInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "subject",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "action",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "accountId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ActorInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "SubjectInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateBankAccountInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "routingNumber",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "accountNumber",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "bankAccountType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "BankAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "primaryOwner",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "BankAccountOwnerInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "beneficialOwners",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "BankAccountOwnerInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "BankAccountStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investmentEntityId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "investorAccountId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "BankAccountOwnerInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSEmail",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ownerType",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "BankAccountOwnerType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "businessName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ipAddress",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSIPAddress",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ssn",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dateOfBirth",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSDate",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "passport",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PassportInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "PassportInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "passportNumber",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "country",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "AddressInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "address1",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address2",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "city",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "state",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "country",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "postalCode",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "latitude",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "longitude",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "googlePlacesId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateBankAccountInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "routingNumber",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "accountNumber",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "bankAccountType",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "BankAccountType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "primaryOwner",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "BankAccountOwnerInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "beneficialOwners",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "BankAccountOwnerInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "BankAccountStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteBankAccountInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateContactInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "company",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "title",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dateOfBirth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDate",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "notes",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "emails",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ContactEmailInput",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "phones",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ContactPhoneInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "ContactStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "accountId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "userId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ownerId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ContactEmailInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSEmail",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "label",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "ContactEmailLabel",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ContactPhoneInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "number",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSPhone",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "label",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "ContactPhoneLabel",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateContactInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "company",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "title",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dateOfBirth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDate",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "notes",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "emails",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ContactEmailInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "phones",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ContactPhoneInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "ContactStatus",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "userId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ownerId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteContactInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateContactTagInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "tagId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteContactTagInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "tagId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateDealInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "DealType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "DealStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investmentEntityId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "access",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "DealAccessType",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateDealInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "access",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "DealAccessType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "deadline",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDate",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "assetType",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "AssetType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "total",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CurrencyInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "fundType",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "FundType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "propertyType",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "PropertyType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "holdTime",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "holdTimeType",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "HoldTimeType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "investmentMin",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CurrencyInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ContentInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "sections",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DealSectionInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "DealStatus",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "investmentEntityId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "DealType",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CurrencyInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "value",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "CurrencyType",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ContentInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "html",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "json",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSJSON",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DealSectionInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "info",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ContentBlockInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "list",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ListBlockInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "cost",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CostSummaryBlockInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "stack",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CapitalStackBlockInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "coc",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CashOnCashBlockInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "irr",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InternalRateOfReturnBlockInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "equityRange",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ReturnOnEquityRangeBlockInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "exit",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ExitCapitlizationRateBlockInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "sale",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectedSalePriceBlockInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ContentBlockInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "content",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ContentInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ListBlockInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "items",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ListItemInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ListItemInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "key",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "value",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CostSummaryBlockInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "items",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CostItemInput",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "capitalization",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CurrencyInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CostItemInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "key",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "value",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CurrencyInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CapitalStackBlockInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "showDebt",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "debt",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CurrencyInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "debtType",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "DebtType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "showMezzanine",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "mezzanine",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CurrencyInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "equity",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CurrencyInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "notes",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CashOnCashBlockInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "initial",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "stabilized",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "average",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InternalRateOfReturnBlockInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "from",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "to",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "IRRType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ReturnOnEquityRangeBlockInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "from",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "to",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ExitCapitlizationRateBlockInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "from",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "to",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ProjectedSalePriceBlockInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "from",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CurrencyInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "to",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CurrencyInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteDealInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateDelegateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "role",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "DelegateRole",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investorAccountId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateDelegateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "role",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "DelegateRole",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteDelegateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateDistributionInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "amount",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CurrencyInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "DistributionStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "distributionNoticeId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investmentId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investorAccountId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investmentEntityId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateDistributionInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "DistributionStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteDistributionInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateDistributionNoticeInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "DistributionType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "amount",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CurrencyInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "cashFlow",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "CashFlowType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "distributed",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSDateTime",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "promote",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "DistributionPromoteInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "prorata",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "DistributionProrataInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "DistributionNoticeStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investmentEntityId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "dealId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DistributionPromoteInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "promoteGP",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "promoteLP",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "carriedInterest",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CurrencyInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DistributionProrataInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "gpAmount",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CurrencyInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lpAmount",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CurrencyInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateDistributionNoticeInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "DistributionNoticeStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteDistributionNoticeInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateFileInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "FileType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "category",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "FileCategory",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "upload",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "S3ObjectInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "FileStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "publicationDate",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDate",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "accreditationId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dealId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "investmentEntityId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "investmentId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "investorAccountId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "subscriptionPackageId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "size",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "mimeType",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "S3ObjectInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "bucket",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "key",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "version",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateFileInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "publicationDate",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDate",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "category",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "FileCategory",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "size",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "FileStatus",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "upload",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "S3ObjectInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "mimeType",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteFileInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreatePhotoInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "PhotoType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "upload",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "S3ObjectInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "primary",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "dealId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdatePhotoInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "upload",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "S3ObjectInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordinal",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "primary",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeletePhotoInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateInvestmentEntityInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxIdType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "TaxIdType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestmentEntityStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "accountId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "dealId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateInvestmentEntityInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "taxId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "taxIdType",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "TaxIdType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "structure",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestmentStructure",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "strategies",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestmentStrategy",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestmentEntityStatus",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dealId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteInvestmentEntityInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateInvestmentInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "amount",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CurrencyInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "agreed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDateTime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "promote",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closingDate",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDate",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestmentStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "dealId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investmentEntityId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "investorAccountId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "role",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "Role",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateInvestmentInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "amount",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CurrencyInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "agreed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDateTime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "promote",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closingDate",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDate",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestmentStatus",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "role",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "Role",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteInvestmentInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateInvestorAccountIndividualInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InvestorAccountIndividualInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InvestorAccountIndividualInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxIdType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "TaxIdTypeSSNandEIN",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "dateOfBirth",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSDate",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "PaymentMethodACHInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "bankAccountId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "enabled",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "PaymentMethodWireInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "beneficiaryName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "routingNumber",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "accountNumber",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "enabled",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "PaymentMethodCheckInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "enabled",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateInvestorAccountIndividualInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "InvestorAccountIndividualInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorAccountStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateInvestorAccountTrustInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InvestorAccountTrustInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InvestorAccountTrustInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxIdType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "TaxIdTypeSSNandEIN",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateInvestorAccountTrustInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "InvestorAccountTrustInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorAccountStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateInvestorAccountIRAInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InvestorAccountIRAInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InvestorAccountIRAInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "IRACustodian",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "other",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "accountNumber",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateInvestorAccountIRAInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "InvestorAccountIRAInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorAccountStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateInvestorAccountEBPInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorAccountType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InvestorAccountEBPInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InvestorAccountEBPInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxIdType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "TaxIdTypeSSNandEIN",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateInvestorAccountEBPInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorAccountType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "InvestorAccountEBPInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorAccountStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateInvestorAccountCorpInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InvestorAccountCorpInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InvestorAccountCorpInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxIdType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "TaxIdTypeSSNandEIN",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateInvestorAccountCorpInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "InvestorAccountCorpInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorAccountStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateInvestorAccountLLCInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InvestorAccountLLCInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InvestorAccountLLCInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxIdType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "TaxIdTypeSSNandEIN",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateInvestorAccountLLCInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "InvestorAccountLLCInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorAccountStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateInvestorAccountPartnershipInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InvestorAccountPartnershipInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InvestorAccountPartnershipInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxIdType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "TaxIdTypeSSNandEIN",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateInvestorAccountPartnershipInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "InvestorAccountPartnershipInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorAccountStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateInvestorAccountJointInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InvestorAccountJointInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InvestorAccountJointInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "JointOwnershipType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxIdType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "TaxIdTypeSSN",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "dateOfBirth",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSDate",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateInvestorAccountJointInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestorAccountType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "InvestorAccountJointInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "AddressInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "paymentMethod",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentMethodType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorAccountStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteInvestorAccountInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateMembershipInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "MembershipType",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteMembershipInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateMessageInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "senderId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "subject",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "body",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ContentInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "fileIds",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSJSON",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "category",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "MessageCategory",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "MessageType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "MessageStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contactId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investmentEntityId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "batchId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dealId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "resendId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateMessageInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "MessageStatus",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "sentAt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDateTime",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteMessageInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreatePaymentInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "amount",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CurrencyInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "type",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "PaymentType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "PaymentStatus",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "payorId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "payeeId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dealId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "distributionId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "investmentId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdatePaymentInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "PaymentStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeletePaymentInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateSettingsInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "accountId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateSettingsGeneralInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "summary",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "phone",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateSettingsDomainInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "domain",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateSettingsPortalInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "color",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "loginMsg",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "welcomeMsg",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "logo",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "S3ObjectInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "favicon",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "S3ObjectInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "splash",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "S3ObjectInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "hero",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "S3ObjectInput",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateSettingsMailInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "fromName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "fromEmail",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "signature",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateSettingsAnalyticsInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ga",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "gtm",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "fb",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteSettingsInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateSubscriptionPackageInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "accreditation",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "AccreditationMethod",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "commitmentAmount",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CommitmentAmountInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "investorLimits",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InvestorLimitInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "taxDoc",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "formationDoc",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "countersignerId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "eSignature",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wetSignature",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "fundingAnnouncement",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "FundingType",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "fundingDate",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "AWSDate",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ach",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodACHInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "wire",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodWireInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "check",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "PaymentMethodCheckInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dealId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "SubscriptionPackageStatus",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CommitmentAmountInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "min",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CurrencyInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "max",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "CurrencyInput",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InvestorLimitInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "commitmentAmount",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CommitmentAmountInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "investorAccountId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteSubscriptionPackageInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateTagInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "accountId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateTagInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteTagInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateTemplateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "TemplateName",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "subject",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "body",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ContentInput",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "TemplateStatus",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "accountId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteTemplateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ResetPasswordInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateUserInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSEmail",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "phone",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSPhone",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "group",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "InvestorGroups",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateUserInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSEmail",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "phone",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSPhone",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteUserInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateManagerInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSEmail",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "phone",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSPhone",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "group",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "ManagerGroups",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "beta",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateManagerInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSEmail",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "phone",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "AWSPhone",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "group",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "ManagerGroups",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "beta",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteManagerInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdatePreferencesInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "preferences",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "InvestorPreferencesInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InvestorPreferencesInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "typical",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "TypicalInvestment",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "annual",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "AnnualInvestment",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "objectives",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "InvestmentObjectives",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "propertyTypes",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "PropertyType",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "regions",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "USRegion",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "periods",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "HoldingPeriod",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "risk",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "RiskTolerance",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "assetType",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "AssetType",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UploadInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "bucket",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contentType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "key",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        }
      ],
        "mutations": [
          {
            "name": "createAccount",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateAccountInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Account",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateAccount",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateAccountInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Account",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteAccount",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteAccountInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Account",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createBusinessAccreditation",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateBusinessAccreditationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Accreditation",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateBusinessAccreditation",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateBusinessAccreditationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Accreditation",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createIndividualAccreditation",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateIndividualAccreditationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Accreditation",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateIndividualAccreditation",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateIndividualAccreditationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Accreditation",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteAccreditation",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteAccreditationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Accreditation",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createActivity",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateActivityInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Activity",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createBankAccount",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateBankAccountInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "BankAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateBankAccount",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateBankAccountInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "BankAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteBankAccount",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteBankAccountInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "BankAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createContact",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateContactInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Contact",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateContact",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateContactInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Contact",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteContact",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteContactInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Contact",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createContactTag",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateContactTagInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "ContactTag",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteContactTag",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteContactTagInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "ContactTag",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createDeal",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateDealInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Deal",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateDeal",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateDealInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Deal",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteDeal",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteDealInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Deal",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createDelegate",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateDelegateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Delegate",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateDelegate",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateDelegateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Delegate",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteDelegate",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteDelegateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Delegate",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createDistribution",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateDistributionInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Distribution",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateDistribution",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateDistributionInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Distribution",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteDistribution",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteDistributionInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Distribution",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createDistributionNotice",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateDistributionNoticeInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "DistributionNotice",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateDistributionNotice",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateDistributionNoticeInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "DistributionNotice",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteDistributionNotice",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteDistributionNoticeInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "DistributionNotice",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createFile",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateFileInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "File",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateFile",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateFileInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "File",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteFile",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteFileInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "File",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createPhoto",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePhotoInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Photo",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatePhoto",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePhotoInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Photo",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deletePhoto",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeletePhotoInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Photo",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createInvestmentEntity",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateInvestmentEntityInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestmentEntity",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateInvestmentEntity",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateInvestmentEntityInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestmentEntity",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteInvestmentEntity",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteInvestmentEntityInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestmentEntity",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createInvestment",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateInvestmentInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Investment",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateInvestment",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateInvestmentInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Investment",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteInvestment",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteInvestmentInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Investment",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createInvestorAccountIndividual",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateInvestorAccountIndividualInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateInvestorAccountIndividual",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateInvestorAccountIndividualInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createInvestorAccountTrust",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateInvestorAccountTrustInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateInvestorAccountTrust",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateInvestorAccountTrustInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createInvestorAccountIRA",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateInvestorAccountIRAInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateInvestorAccountIRA",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateInvestorAccountIRAInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createInvestorAccountEBP",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateInvestorAccountEBPInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateInvestorAccountEBP",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateInvestorAccountEBPInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createInvestorAccountCorp",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateInvestorAccountCorpInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateInvestorAccountCorp",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateInvestorAccountCorpInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createInvestorAccountLLC",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateInvestorAccountLLCInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateInvestorAccountLLC",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateInvestorAccountLLCInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createInvestorAccountPartnership",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateInvestorAccountPartnershipInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateInvestorAccountPartnership",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateInvestorAccountPartnershipInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createInvestorAccountJoint",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateInvestorAccountJointInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateInvestorAccountJoint",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateInvestorAccountJointInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteInvestorAccount",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteInvestorAccountInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "InvestorAccount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateMembership",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateMembershipInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Membership",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteMembership",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteMembershipInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Membership",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createMessage",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateMessageInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Message",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateMessage",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateMessageInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Message",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteMessage",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteMessageInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Message",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "batchCreateMessages",
            "description": null,
            "args": [
              {
                "name": "messages",
                "description": null,
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateMessageInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Message",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createPayment",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePaymentInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Payment",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatePayment",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePaymentInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Payment",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deletePayment",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeletePaymentInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Payment",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createSettings",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateSettingsInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Settings",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateSettingsGeneral",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateSettingsGeneralInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Settings",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateSettingsDomain",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateSettingsDomainInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Settings",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateSettingsPortal",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateSettingsPortalInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Settings",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateSettingsMail",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateSettingsMailInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Settings",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateSettingsAnalytics",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateSettingsAnalyticsInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Settings",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteSettings",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteSettingsInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Settings",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateSubscriptionPackage",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateSubscriptionPackageInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "SubscriptionPackage",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteSubscriptionPackage",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteSubscriptionPackageInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "SubscriptionPackage",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createTag",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateTagInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Tag",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateTag",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateTagInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Tag",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteTag",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteTagInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Tag",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateTemplate",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateTemplateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Template",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteTemplate",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteTemplateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Template",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resetPassword",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ResetPasswordInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createUser",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateUserInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateUser",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateUserInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteUser",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteUserInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createManager",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateManagerInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateManager",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateManagerInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteManager",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteManagerInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatePreferences",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePreferencesInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "UserProfile",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "generateSignedUploadURL",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UploadInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Upload",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
          "queries": [
            {
              "name": "getAccount",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Account",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listAccounts",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "AccountFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "AccountConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getAccreditation",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Accreditation",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listAccreditations",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "AccreditationFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "AccreditationConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getActivity",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Activity",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listActivities",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ActivityFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ActivityConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getBankAccount",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "BankAccount",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listBankAccounts",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "BankAccountFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "BankAccountConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getContact",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Contact",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listContacts",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ContactFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ContactConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "filterContacts",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ContactDataFilterInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "sort",
                  "description": null,
                  "type": {
                    "kind": "ENUM",
                    "name": "ContactDataSorts",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ContactConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getContactTag",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ContactTag",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listContactTags",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ContactTagFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ContactTagConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getDeal",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Deal",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listDeals",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DealFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DealConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getDelegate",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Delegate",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listDelegates",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DelegateFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DelegateConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getDistribution",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Distribution",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listDistributions",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DistributionFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DistributionConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getDistributionNotice",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DistributionNotice",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listDistributionNotices",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DistributionNoticeFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DistributionNoticeConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getFile",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "File",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listFiles",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "FileFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "FileConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getInvestmentEntity",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestmentEntity",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listInvestmentEntities",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "InvestmentEntityFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestmentEntityConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getInvestment",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Investment",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listInvestments",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "InvestmentFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestmentConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "filterInvestments",
              "description": null,
              "args": [
                {
                  "name": "filters",
                  "description": null,
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "InvestmentDataFilterInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "sort",
                  "description": null,
                  "type": {
                    "kind": "ENUM",
                    "name": "InvestmentDataSorts",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestmentConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getInvestorAccount",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestorAccount",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listInvestorAccounts",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "InvestorAccountFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestorAccountConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "filterInvestorAccounts",
              "description": null,
              "args": [
                {
                  "name": "filters",
                  "description": null,
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "InvestorAccountDataFilterInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "sort",
                  "description": null,
                  "type": {
                    "kind": "ENUM",
                    "name": "InvestorAccountDataSorts",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestorAccountConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getMembership",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Membership",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listMemberships",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "MembershipFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MembershipConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getMessage",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Message",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listMessages",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "MessageFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MessageConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getPayment",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Payment",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listPayments",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "PaymentFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PaymentConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getSettings",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Settings",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listSettings",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "SettingsFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "SettingsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getSubscriptionPackage",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "SubscriptionPackage",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listSubscriptionPackages",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubscriptionPackageFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "SubscriptionPackageConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getTag",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Tag",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listTags",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "TagFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "TagConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getTemplate",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Template",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listTemplates",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "TemplateFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "TemplateConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getUser",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listUsers",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UserConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "getManager",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "listManagers",
              "description": null,
              "args": [
                {
                  "name": "filter",
                  "description": null,
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ManagerFilterInput",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "nextToken",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ManagerConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "currentAccount",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Account",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "currentContact",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Contact",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "currentUser",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myAccreditations",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "AccreditationCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myBankAccounts",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "BankAccountCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myDeals",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DealCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myActiveDeals",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DealCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myAvailableDeals",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DealCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myFundedDeals",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DealCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myInvitedDeals",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DealCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myFiles",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "FileCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myInvestments",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestmentCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myActiveInvestments",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestmentCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myProspectiveInvestments",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestmentCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myInvestorAccounts",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InvestorAccountCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "myPayments",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PaymentCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "search",
              "description": null,
              "args": [
                {
                  "name": "keywords",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "SearchResultCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "typeahead",
              "description": null,
              "args": [
                {
                  "name": "keywords",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "type",
                  "description": null,
                  "type": {
                    "kind": "ENUM",
                    "name": "TypeaheadType",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "TypeaheadResultCollection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ]
}
