//  FILTER METHOD
// Iterates an arrays and filters out

const scores = [10, 15, 20, 25, 30, 5,];

// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });
// console.log(filteredScores);

const users = [
    {name: "cody", premium: true},
    {name: "kings", premium: false},
    {name: "jason", premium: false},
    {name: "smith", premium: true}
]

const premiumUsers = users.filter((user)=>{
    return user.premium;
})
console.log(premiumUsers);