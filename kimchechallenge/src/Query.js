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
