const
    test = require("tape")
    , supertest = require("supertest")
    , app = require("./index")
;

test("/test should reply with 200", t => {
    supertest(app)
        .get("/test")
        .expect(200)
        .end((err,res) => {
            if(err){
                return t.fail(err)
            }
            t.pass("/test replied with 200");
            t.end()
        })
    ;

    setTimeout(()=>{
        t.fail("failed to shut down express");
        process.exit(1);
    },30000)

});