const superTest = require('supertest');
const app = require('../app.js');
const {
    postMahasiswaData,
    putMahasiswaData,
    nimMahasiswaData
} = require('./data/mahasiswa.test.data.js');
const {
    postMatkulData,
    putMatkulData,
    kodeMatkulData
} = require('./data/matkul.test.data.js')


describe('Test API Mahasiswa', () => {
    test('Test Get Mahasiswa', async () => {
        let response = await superTest(app).get('/v2/get');

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    test('Test Post Mahasiswa', async () => {
        let response = await superTest(app)
            .post('/v2/add')
            .send(postMahasiswaData);
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    })

    test('Test Get Mahasiswa By NIM', async () => {
        let response = await superTest(app)
            .get(`/v2/${nimMahasiswaData.nim}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    })

    test('Test Put Mahasiswa By NIM', async () => {
        let response = await superTest(app)
            .put(`/v2/update/${nimMahasiswaData.nim}`)
            .send(putMahasiswaData);
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    })

    test('Test Delete Mahasiswa By NIM', async () => {
        let response = await superTest(app)
            .delete(`/v2/delete/${nimMahasiswaData.nim}`);
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    })
})

describe('Test API Matkul', () => {
    test('Test Get Matkul', async () => {
        let response = await superTest(app).get('/matkul/');

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });

    test('Test Post Matkul', async () => {
        let response = await superTest(app)
            .post('/matkul/add')
            .send(postMatkulData);
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    })

    test('Test Get Matkul By Kode Matkul', async () => {
        let response = await superTest(app)
            .get(`/matkul/${kodeMatkulData.kd_matkul}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    })

    test('Test Put Matkul By Kode Matkul', async () => {
        let response = await superTest(app)
            .put(`/matkul/update/${kodeMatkulData.kd_matkul}`)
            .send(putMatkulData);

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    })

    test('Test Delete Matkul By Kode Matkul', async () => {
        let response = await superTest(app)
            .delete(`/matkul/delete/${kodeMatkulData.kd_matkul}`);
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    })
})