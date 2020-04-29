export const combineSchemas = schemaArr => {
  let queries = "";
  let mutations = "";
  let schemas = "";
  schemaArr.map(schema => {
    queries += schema.Query;
    mutations += schema.Mutation;
    schemas += schema.Schema;
    return null;
  });
  return `
    ${schemas}
    
    type Query {
      ${queries}
    }
    
    type Mutation {
      ${mutations}
    }
  `;
};
