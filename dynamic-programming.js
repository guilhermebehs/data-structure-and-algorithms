import assert from 'assert'

export class Item{
    constructor(name, weight, value){
        this.name = name
        this.weight = weight
        this.value = value
    }
}

export class Estimate{
    constructor(totalValue, names){
        this.totalValue = totalValue 
        this.names = names
    }
}

function knapsackProblem(items, bagCapacity){
    const estimates = Array(items.length).fill().map(()=>Array(bagCapacity).fill(0))
    for(let i=0; i < items.length; i++){
        for(let y=0; y < bagCapacity; y++){
            const {value:currentItemValue, name: currentItemName, weight: currentItemWeight} = items[i]
            const currentWeight = y+1
            const remainingWeight = currentWeight - currentItemWeight

            if(i === 0){
                if(remainingWeight >= 0)
                   estimates[i][y] = new Estimate(currentItemValue, [currentItemName])
                continue
            }
            const previousBestEstimateValue = estimates[i-1][y].totalValue
            if(remainingWeight === 0){
                estimates[i][y] = new Estimate(currentItemValue, [currentItemName])
                continue 
            }
            if(remainingWeight < 0){
                estimates[i][y] = new Estimate(estimates[i-1][y].totalValue, estimates[i-1][y].names)
                continue 
            }
            const bestEstimateForRemainingWeight = estimates[i-1][y-currentItemWeight]

            const currentBestEstimate =    
                previousBestEstimateValue > (bestEstimateForRemainingWeight.totalValue + currentItemValue ) ?
                new Estimate(estimates[i-1][y].totalValue, estimates[i-1][y].names):
                new Estimate(bestEstimateForRemainingWeight.totalValue + currentItemValue, [...bestEstimateForRemainingWeight.names,currentItemName])

            estimates[i][y] = currentBestEstimate

        }
    }

    return estimates[items.length-1][bagCapacity-1]
}

const items = []
items.push(new Item('Guitar', 1, 1500))
items.push(new Item('Radio', 4, 3000))
items.push(new Item('Notebook', 3, 2000))

const response = knapsackProblem(items, 4)

assert.equal(response.totalValue, 3500)
assert.equal(response.names.length, 2)
assert.equal(response.names.includes('Notebook'), true)
assert.equal(response.names.includes('Guitar'), true)


