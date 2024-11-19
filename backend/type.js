const zod=require("zod")
const createcard=zod.object({
    Name:zod.string(),
    Aboutme:zod.string(),
    Interests:zod.string(),
    Linkedin:zod.string(),
    Twitter:zod.string()
})
const updatecard=zod.object({
    id:zod.string()
})
module.exports={
    createcard:createcard,
    updatecard:updatecard
}