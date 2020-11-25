import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SnakeGame from '@/components/pages/snake.vue'
import SnakeFooter from '@/components/pages/footer/index.vue'
import PageTwo from '@/components/pages/footer/page2.vue'
import Cat from '@/components/pages/cat.vue'
import HtmlFive from '@/components/pages/html-five.vue'
import Test from '@/components/test.vue'
import Table from '@/components/table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/snake',
      name: 'SnakeGame',
      component: SnakeGame,
      children: [
        {
          path: 'footer',
          name: 'SnakeFooter',
          component: SnakeFooter
        },
        {
          path: 'PageTwo',
          component: PageTwo
        }
      ]
    },
    {
      path: '/cat',
      name: 'Cat',
      component: Cat
    },
    {
      path: '/htmlfive',
      name: 'HtmlFive',
      component: HtmlFive
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }
  ]
})
