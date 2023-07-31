import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import Image from './download.jpg?thumb'

const page = `<!DOCTYPE HTML>
<html lang="en">
    <body>
        <h1>Example</h1>
        <img style="margin-left: 200px" src="${Image.src}" id="demo" width="${Image.width}" height="${Image.height}">

        <script>
          const demo = document.getElementById('demo')
          setTimeout(() => demo.src = "${Image.originalSrc}", 500)
        </script>
    </body>
</html>`

new Elysia()
    .use(html())
    .get('/', () => page)
    .get('/html', ({ html }) => html(page))
    .listen(8080)
