module.exports ={

    getAll: (req, res) => {
        const db = req.app.get('db');
        db.read_products().then(results => {
            res.status(200).json(results)
        })
        .catch(err => {
            res.status(500).send(err, 'You done messed up A-A-Ron')
            console.log(err)
        })
    },

    create: (req, res) => {
        const db = req.app.get('db');
        const {name, price, image_url} = req.body.newValues
        console.log(req.body.newValues)
        db.create_product([name, price, image_url]).then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send(err, 'You done messed up A-A-Ron')
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        db.delete_product(req.params.id).then(results => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send(err, 'You done messed up A-A-Ron')
            console.log(err)
        })
    },
    update: (req, res) => {
        const db = req.app.get('db');
        const {name, price, image_url} = req.body.newValues
        console.log(name)
        db.update_product([req.params.id, image_url, name, price]).then(results => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send(err, 'You done messed up A-A-Ron')
            console.log(err)
        })
    }

    
}