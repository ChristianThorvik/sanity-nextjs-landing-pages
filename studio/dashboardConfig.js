export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '626fb2bba86c0519ec4b3dfb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v14c6qs1',
                  apiId: '5bad72c7-057e-43bd-978a-c4587fcc4e56'
                },
                {
                  buildHookId: '626fb2bc17e90a180f91ca9e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b963tfu7',
                  apiId: 'df7885c3-ac4f-4030-880d-e882565e94b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChristianThorvik/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b963tfu7.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
