import Ajv from "ajv";
import CoverPhoto from "../classes/CoverPhoto";

const ajv = new Ajv();

const dataTests = require('../../fixtures/data-driven/activities.json')

const endPoint = 'https://fakerestapi.azurewebsites.net/';

let idsSaved = [];


describe('API TESTING PRACTICE - First Section', () => {    

    it.skip('GET practice endpoint', () => {

        cy.log('start the resqurest');

        let resource = 'api/v1/Activities'

        cy.request(endPoint);

        cy.request('GET', `${endPoint}${resource}`)
            .its('status')
            .should('eq', 200);

    });


    it('GET Activities', () => {
        let resource = 'api/v1/Activities'

        cy.request({
            method: "GET",
            url: `${endPoint}${resource}`,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(30);


            var idsArray = []
            // var objArray = []
            for (var index in response.body) {
                idsArray.push(response.body[index].id)
                // objArray.push(response.body[index])
            }

            idsSaved = idsArray;

            cy.log('revision del array')
            idsArray.forEach(elem => cy.log('id: '+elem));
            // actsArray.forEach(elem => cy.log(elem));
            // objArray.forEach(elem => {
            //     cy.log('id: ' + elem.id)
            //     cy.log('title: ' + elem.title)
            //     cy.log('date: ' + elem.dueDate)
            //     cy.log('completed: ' + elem.completed)
            // });

            

        });

    });        

    dataTests.forEach(test => {

        it('POST activities', () => {
            let resource = 'api/v1/Activities'
    
            // for (let index = 0; index < 4; index++) {
    
                cy.request({
                    method: 'POST',
                    url: `${endPoint}${resource}`,
                    headers: { 'Content-Type': 'application/json' },
                    body: {
                        "id": test.id,
                        "title": "Activity " + test.id,
                        "dueDate": "2022-08-07",
                        "completed": true
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200);
    
                    cy.log('Show response values')
                    cy.log('id: ' + response.body.id)
                    cy.log('title: ' + response.body.title)
                });
    
            // }
        });
        
    });


    it('Get one Activity', () => {

        let resource = 'api/v1/Activities';
        let numRandom = randomNum(0, idsSaved.length - 1)
        let idRandom = idsSaved.at(numRandom)
        cy.log('Random number: '+numRandom)


        cy.request({
            method: 'GET',
            url: `${endPoint}${resource}/${idRandom}`,
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status,'Status code incorrect').to.eq(200);
            expect(response.body.id,'The id is not equal to random number').to.eq(idRandom);

            cy.log('Show response values')
            cy.log('id: ' + response.body.id)
            cy.log('title: ' + response.body.title)

        });
    });

    // ajv cypress comand para pojo

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
});

describe('API TESTING PRACTICE - Second Section', () => { 

    it.skip('Get books - Schema validation', () => {

        let resource = 'api/v1/Books';

        cy.request({
            method: 'GET',
            url: `${endPoint}${resource}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).as('bookReq');

        cy.get('@bookReq')
        .its('status')
            .should('eq', 200);

        cy.get('@bookReq')    
        .its('body')
        .each( object => {
            expect(object).to.have.all.keys('id','title','description','pageCount','excerpt','publishDate');
        });
        
    });

    it('SCHEMA VALIDATE AJV', () => {

        cy.request('https://fakerestapi.azurewebsites.net/api/v1/Books').as('bookApi');

        cy.get('@bookApi')
        .then((response) => {
            
            cy.fixture("data-driven/schemaBooks").then((bookSchema) => {
                cy.log('validate schema function')

                const validate = ajv.compile(bookSchema)
                const valid = validate(response.body)

                if(valid) cy.log("Success JSON Schema validation")
                else cy.log("Failed JSON Schema validation"+validate.errors)

                expect(valid,'Verify the schema').to.be.true;

            })           

        });

        cy.get('@bookApi').then((response) => {

            cy.log('print headers')
            let arr = Object.keys(response.headers); 
            arr.forEach((val) => {
                cy.log(`${val}: ${response.headers[val]} `);
              })

          })
        
    });
     
})

describe('API TESTING PRACTICE - Third Section', () => { 

    it('GET Activities', () => {
        let resource = 'api/v1/CoverPhotos'

        cy.request({
            method: "GET",
            url: `${endPoint}${resource}`,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {

            expect(response.status).to.eq(200);

            let coverPhotoArr = []

            response.body.forEach(elem => {
                coverPhotoArr.push(Object.assign(new CoverPhoto(), elem));
            });


            cy.log('Print response')
            coverPhotoArr.forEach(item => {
                // cy.log('Id: '+item.getId());
                cy.log('IdBook: '+item.getIdBook());
                cy.log('Url: '+item.getUrl());
                cy.log('---------------------------');
                
            });

        });

    }); 
     
})