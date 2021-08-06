
function objectiveresponse(question,options,ans){
    this.question =question,
    this.options = options,
    this.ans = ans;
}

var questionBank = []

questionBank.push(new objectiveresponse("Stars appears to move from east to west because",
                                            ["All stars move from east to west",
                                            "The earth rotates from west to east",
                                            "The earth rotates from east to west",
                                            "The background of the stars moves from west to east"],
                                            "2",))


questionBank.push(new objectiveresponse("Oil raise up the wick in a lamp. The principle involves",
                                            ["The diffusion of oil through the wick",
                                            "The liquid state of oil",
                                            "Capillary action phenomenon",
                                            " Volatility of oil"],
                                            "3",))

questionBank.push(new objectiveresponse("Magnetism at the center of a bar magnet is",
                                            ["Minimum",
                                            "Maximum",
                                            "Zero",
                                            "Minimum or maximum"],
                                            "3",))

questionBank.push(new objectiveresponse("On a stationary sail boat, air is blown from a fan attached to the boat. The boat",
                                            ["Moves in opposite direction in which the air is blown",
                                            "Does not move",
                                            "Moves in the same direction in which air blows",
                                            "Spins around"],
                                            "2",))

questionBank.push(new objectiveresponse("Identify the vector quantity from the following",
                                            ["Heat",
                                            "Angular momentum",
                                            "Time",
                                            "Work"],
                                            "2",))


console.log(questionBank)
