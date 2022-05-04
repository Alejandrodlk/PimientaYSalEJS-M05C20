const products = require("../data/products")

module.exports = {
    detail : (req,res) => {


        const {id} = req.params  /* desestructuro id */
        const product = products.find(product => product.id === +id) /* sin desestructurar id seria: +req.params.id */



        return res.render("detalleMenu" , {
            product,
        })
    }
}