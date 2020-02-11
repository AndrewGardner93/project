const axios = require('axios')

const something = [] 

let image = ['https://www.flaticon.com/premium-icon/icons/svg/1714/1714236.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108640.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108622.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108635.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108650.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108625.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108658.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108638.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108639.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108653.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108651.svg', 'https://www.flaticon.com/premium-icon/icons/svg/2108/2108644.svg']

function getRandomImage(){
    let maxIndex = image.length - 1
    let randomIndex = Math.floor(Math.random() * maxIndex)

    return image[randomIndex]
}

const randomImage1 = getRandomImage()
const randomImage2 = getRandomImage()
const randomeImage3 = getRandomImage()

module.exports = {
    
    getResults: (res, req) => {
        const {Icons} = req.body
        Icons.id = id
        id++
        something.push(Icons)

        res.status(200).send(something)
    },
    
    highScore: (req, res) => {
        const {Icons} = req.body
        something.id = id
        id++
        something.push(Icons)

        res.status(200).send(something)

    },
    
    resultName: (req, res) => {
        const {id} = req.params
        const {name} = req.body

        const index = something.findIndex(element => {
            return element.id === +id
        })
       
    },
    
    erase: (req, res) => {
        const {id} = req.params

        const index = something.findIndex(element => {
            return element.id === +id
        })
            something.splice(index, 1)

            res.status(200).send(something)

      
    }
}

let slotMachinePic = 'https://mtltimes.ca/wp-content/uploads/2019/10/Online-slot-machines-min-653x393.jpg'







