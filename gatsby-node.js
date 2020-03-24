const path = require('path')

module.exports.createPages = async ({ reporter, graphql, actions }) => {
    const { createPage } = actions
    const escursioniTemplate = path.resolve('./src/templates/escursioni.js')
    const result = await graphql(`
        query {
            allPrismicEscursioni {
                edges {
                    node {
                        data{
                            slug{
                                text
                            }
                        }
                       
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panic(result.errors);
      }

    result.data.allPrismicEscursioni.edges.forEach((edge) => {
        createPage({
            component: escursioniTemplate,
            path: `/escursioni/${edge.node.data.slug.text}`,
            context: {
                slug: edge.node.data.slug.text,
            }
        })
    })
    
}