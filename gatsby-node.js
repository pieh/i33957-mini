exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  createTypes(`
    type SanityBifold {
      _key: String!
      _type: String!
      heading: String
      copy: String
    }
    
    type SanityBifold implements ContentBlock {
      _key: String!
      _type: String!
      heading: String
      copy: String
    }

    interface ContentBlock {
      _type: String!
      _key: String!
    }
  `)
}
