import {gql} from "apollo-boost";

export const CountryQuery = gql`
query {
    countries {
      name
      emoji
      code
      currency
      capital
      native
      languages {
        name
        native
        code
      }
      continent {
        name
        code
      }
    }
  }
`;

export const ContinentFilterQuery = gql`
query {
  continents(filter: {code: {ne:"continent"}}) {
    code
    name
    countries {
      name
      emoji
      code
      currency
      capital
      native
      languages {
        name
        code
        native
      }
    continent {
        name
        code
      }
    }
  }
}
`;

export const LanguageFilterQuery = gql`
query {
  languages(filter: {code: {ne: "languages"}}) {
    code
    name
    native
  }
}
`