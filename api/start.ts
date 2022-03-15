import { Application, Router } from "https://deno.land/x/oak/mod.ts";


const books = new Map<string, any>()
books.set('1', {
    id: 1,
    title: 'the new Bokks',
    author: 'teste',
})

const router = new Router()

router
    .get('/', ctx => {
    ctx.response.body =  'Hello Books'
})
    .get('/books', ({response})=>{
        response.body = Array.from(books.values())
})
    .get('/books/:id', ({response, params})=>{
        response.body = params?.id && books.has(params.id) ? books.get(params.id) : "Livro não encontrado"
})


const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())



await app.listen({ port: 8000 })

