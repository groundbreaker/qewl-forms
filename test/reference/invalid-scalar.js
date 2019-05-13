export const apiSchema = {
  enums: {
    ContactEmailLabel: {
      kind: "ENUM",
      name: "ContactEmailLabel",
      description: null,
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "WORK",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "HOME",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "OTHER",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        }
      ],
      possibleTypes: null
    },
    ContactPhoneLabel: {
      kind: "ENUM",
      name: "ContactPhoneLabel",
      description: null,
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "WORK",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "MOBILE",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "HOME",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "FAX_WORK",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "FAX_HOME",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "OTHER",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        }
      ],
      possibleTypes: null
    },
    ContactStatus: {
      kind: "ENUM",
      name: "ContactStatus",
      description: null,
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "APPROVED",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "DENIED",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "INACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "ON_HOLD",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        },
        {
          name: "PENDING",
          description: null,
          isDeprecated: false,
          deprecationReason: null
        }
      ],
      possibleTypes: null
    }
  },
  inputTypes: {
    AddressInput: {
      kind: "INPUT_OBJECT",
      name: "AddressInput",
      description: null,
      fields: null,
      inputFields: [
        {
          name: "address1",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "address2",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null
          },
          defaultValue: null
        },
        {
          name: "city",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "state",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "country",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "postalCode",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "latitude",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null
          },
          defaultValue: null
        },
        {
          name: "longitude",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null
          },
          defaultValue: null
        },
        {
          name: "googlePlacesId",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null
          },
          defaultValue: null
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null
    },
    CreateContactInput: {
      kind: "INPUT_OBJECT",
      name: "CreateContactInput",
      description: null,
      fields: null,
      inputFields: [
        {
          name: "firstName",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "lastName",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "MissingLastNameType",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "address",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null
          },
          defaultValue: null
        },
        {
          name: "company",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null
          },
          defaultValue: null
        },
        {
          name: "title",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null
          },
          defaultValue: null
        },
        {
          name: "dateOfBirth",
          description: null,
          type: {
            kind: "SCALAR",
            name: "AWSDate",
            ofType: null
          },
          defaultValue: null
        },
        {
          name: "notes",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null
          },
          defaultValue: null
        },
        {
          name: "emails",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "INPUT_OBJECT",
                name: "ContactEmailInput",
                ofType: null
              }
            }
          },
          defaultValue: null
        },
        {
          name: "phones",
          description: null,
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ContactPhoneInput",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "status",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "ContactStatus",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "accountId",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "userId",
          description: null,
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null
          },
          defaultValue: null
        },
        {
          name: "ownerId",
          description: null,
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null
          },
          defaultValue: null
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null
    },
    ContactEmailInput: {
      kind: "INPUT_OBJECT",
      name: "ContactEmailInput",
      description: null,
      fields: null,
      inputFields: [
        {
          name: "address",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "AWSEmail",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "label",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "ContactEmailLabel",
              ofType: null
            }
          },
          defaultValue: null
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null
    },
    ContactPhoneInput: {
      kind: "INPUT_OBJECT",
      name: "ContactPhoneInput",
      description: null,
      fields: null,
      inputFields: [
        {
          name: "number",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "AWSPhone",
              ofType: null
            }
          },
          defaultValue: null
        },
        {
          name: "label",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "ContactPhoneLabel",
              ofType: null
            }
          },
          defaultValue: null
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null
    }
  }
};
