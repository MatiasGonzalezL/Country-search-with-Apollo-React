import {gql} from "apollo-boost";

export const DataQuery = gql`
query {
	countriesData: countries {
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
  continentsData: continents (filter: {code: {ne: "continent"}}){
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
  languagesData: languages(filter: {code: {ne: "languages"}}) {
    code
    name
    native
  }
}
`