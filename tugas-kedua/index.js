const Express = require('express');
const app = Express();
const PORT = 3000;

app.use(Express.json())

// req params query body
const datas = [
    {
        name: "Rizky",
        age: 20
    },
    {
        name: "Rizku",
        age: 21
    },
    {
        name: "Rizka",
        age: 22
    },
    {
        name: "Rizki",
        age: 23
    }
]

app.get('/', (req, res) => {
    res.send(datas)
})

app.get('/params/:nama', (req, res) => {

    const { nama } = req.params;

    const result = datas.find(data => data.name === nama)

    if (!result) {
        return res.json({
            message: "data tidak ditemukan"
        })
    }

    res.json({
        message: "data ditemukan",
        data: result
    })
})

app.get('/query', (req, res) => {

    const { nama } = req.query;

    const result = datas.find(data => data.name === nama)

    if (!result) {
        return res.json({
            message: "data tidak ditemukan"
        })
    }

    res.json({
        message: "data ditemukan",
        data: result
    })
})

app.post('/post', (req, res) => {

    const { name, age } = req.body;

    datas.push({ name, age })

    res.json({
        message: "data berhasil ditambahkan",
        data: datas
    })
})


app.listen(PORT, () => console.log(`server berjalan di http://localhost:${PORT}`))