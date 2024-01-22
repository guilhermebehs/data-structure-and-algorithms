// should find a way to schedule as many as classes as possible in one room, taking into account its schedules
export class ClassScheduleProblem{

    #classes = []

    constructor(){
        this.#classes.push(
            {name: 'Arts', startsAt: new Date('2020-01-01T09:00:00.0Z'),endsAt:new Date('2020-01-01T10:00:00.0Z')},
            {name: 'English', startsAt:new Date('2020-01-01T09:30:00.0Z'),endsAt:new Date('2020-01-01T10:30:00.0Z')},
            {name: 'Math', startsAt:new Date('2020-01-01T10:00:00.0Z'),endsAt:new Date('2020-01-01T11:00:00.0Z')},
            {name: 'cc', startsAt:new Date('2020-01-01T10:30:00.0Z'),endsAt:new Date('2020-01-01T11:30:00.0Z')},
            {name: 'Music', startsAt:new Date('2020-01-01T11:00:00.0Z'),endsAt:new Date('2020-01-02T00:00:00.0Z')},
            )
    }

    getTheBestSolution(){
        const schedule = []
    // select the first class and remove it from the list    
        let nextClass = this.#classes.reduce((c1, c2)=> c1.endsAt.getTime() > c2.endsAt.getTime() ? c2: c1, this.#classes[0])
        schedule.push(nextClass)
        this.#classes.splice(this.#classes.indexOf(nextClass),1)
    
        for(let y =0; y < this.#classes.length; y++){
    // get all classes that starts right after the end of the last class       
            const possibleNextClasses = this.#classes.filter((currentClass)=>  currentClass.startsAt.getTime() >= nextClass.endsAt.getTime())
    // get the next class selecting the class which starts earlier        
            nextClass = possibleNextClasses.reduce((c1, c2)=> c1.startsAt.getTime() > c2.startsAt.getTime() ? c2: c1, possibleNextClasses[0])
    // insert the next class in the schedule and remove it from the list        
            schedule.push(nextClass)
            this.#classes.splice(this.#classes.indexOf(nextClass),1)
        }

        return schedule
    }
}

console.log(new ClassScheduleProblem().getTheBestSolution())