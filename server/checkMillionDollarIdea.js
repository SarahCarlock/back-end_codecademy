const checkMillionDollarIdea = ('idea', (req, res, next) => {
    const { numWeeks, weeklyRevenue} = req.body;
    const million = 1000000;
    const value = Number(numWeeks * weeklyRevenue >= million);
    
    if (value) {
        next();
    } else {
        return res.status(400).send();
    };
});

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
