const checkMillionDollarIdea = (idea) => {
    if(idea.numWeeks*idea.weeklyRevenue > 1000000){
        return true
    }
    else {return false}
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

// - Idea
//   - id: string
//   - name: string
//   - description: string
//   - numWeeks: number
//   - weeklyRevenue: number