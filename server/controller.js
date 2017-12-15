
module.exports = {
    post: (req, res)=> {
        const dbInstance = req.app.get('db') //Simulation-1 74M
        // Simulation-1 70F
        dbInstance.create_bin([req.params,id, req.body.name, req.body.price]).then(bin=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)}) // //Simulation-1 74H 74J 74L 76D 76F
    },
    
    get: (req,res)=> {
        const dbInstance = req.app.get('db')
        dbInstance.read_bin([req.params.id]).then(bin=> res.status(200).send(bin||NULL)).catch(error=>{console.error(error);res.status(500).send(err)})
    },

    update: (req, res)=>{
        const dbInstance = req.app.get('db')
        dbInstance.update_bin([req.params.id,req.body.name, req.body.price]).then(bin=> res.status(200).send(bin)).catch(error=>{console.error(error);res.status(500).send(err)})
    },

    delete: (req,res) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_bin([req.params.id]).then(bin=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
    },
    read: (req,res)=> {
        const dbInstance = req.app.get('db')
        dbInstance.read_shelf([req.params.id]).then(shelf=> res.status(200).send(shelf)).catch(error=>{console.error(error);res.status(500).send(err)})
    }
}