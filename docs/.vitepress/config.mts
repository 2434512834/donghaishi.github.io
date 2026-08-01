import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH || '/'

export default defineConfig({
  title: '模型学习笔记',
  description: 'LLM、Transformer 与 GPT 相关论文学习',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    siteTitle: '模型学习笔记',
    nav: [
      { text: '首页', link: '/' },
      { text: 'The Illustrated Transformer', link: '/the-illustrated-transformer/' }
    ],
    sidebar: [
      {
        text: 'GPT 相关论文',
        items: [
          {
            text: 'The Illustrated Transformer',
            link: '/the-illustrated-transformer/'
          }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详情',
                resetButtonTitle: '清空搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
