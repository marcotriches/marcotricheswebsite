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
            allPrismicBlog {
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
            allPrismicPercorsi {
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
    });
 
    const blogTemplate = path.resolve('./src/templates/blog.js')

    result.data.allPrismicBlog.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.data.slug.text}`,
            context: {
                slug: edge.node.data.slug.text,
            }
        })
    });

    const percorsiTemplate = path.resolve('./src/templates/percorsi.js')

    result.data.allPrismicPercorsi.edges.forEach((edge) => {
        createPage({
            component: percorsiTemplate,
            path: `/percorsi/${edge.node.data.slug.text}`,
            context: {
                slug: edge.node.data.slug.text,
            }
        })
    })
}

