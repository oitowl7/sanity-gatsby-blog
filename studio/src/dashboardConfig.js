export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61ddb7abc2f94744d95f0753",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8q1rmeuj",
                  apiId: "88a0fb3d-3d00-4f9c-a9c2-0b2e9960bb79",
                },
                {
                  buildHookId: "61ddb7ab02b3f64754af84d1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yw48mx1h",
                  apiId: "b0e24e02-8542-4e8c-a37b-5bbad991f37d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/oitowl7/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yw48mx1h.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
