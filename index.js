import { createServer } from 'node:http';
const hostname = '127.0.0.1'; //тот ip адрес на котором мы хотим запуститься
const port = 3000;
const server = createServer((req, res) => {
    const url = req.url
    const method = req.method
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // если мы на главной страничке и метод у нас GET 
    if( url === '/' && method === 'GET'){
        res.write(`
            <a  href="/">Главная</a>
            <a  href="/contacts">Контакты</a>
            <h1>Главная страница</h1>
            `)
    }
    if( url === '/contacts' && method === 'GET'){
        res.write(`
            <a  href="/">Главная</a>
            <a  href="/contacts">Контакты</a>
            <h1>Контакты</h1>
            `)
    }

    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});





























/*
//всегда {} перед тем как что-то импортироровать
import {someFunc, someFunc2, arr} from "./util";

const obj = {
    name: 'test',
    age: 20,
    height: 170
}

//const name1 = obj.name //копия
//const age1 = obj.age
const {name, age } = obj

someFunc()
*/