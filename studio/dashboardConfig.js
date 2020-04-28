export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea798a13f79d2aaf993ee70',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kdvbfkwd',
                  apiId: '2280c2b9-0e2a-4514-944f-07d9596ba6b9'
                },
                {
                  buildHookId: '5ea798a1d3d2f5ef7b494372',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pk9drgi9',
                  apiId: '3f26f770-5afb-45b4-afce-9f6cbff13b43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fmunives/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pk9drgi9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
