require("dotenv").config();

const corestockControllerIntraday = async(req, res)=>{
    const data = {
        ticker: req.body.ticker,
        interval: req.body.interval
    }
    await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}?&interval=${interval}&apikey=ME5MBOEBZSJHFRN8`, {method: 'GET'})
    .then(response=>{

    }).then(data=>{
        const returnData = {

        };
        return res.status(200).json();
    })
}
const corestockControllerDaily = async(req, res)=>{
    const data = {
        ticker: req.body.ticker,
    }
    await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}?&apikey=ME5MBOEBZSJHFRN8`, {method: 'GET'})
    .then(response=>{

    }).then(data=>{
        const returnData = {

        };
        return res.status(200).json();
    })
}
const corestockControllerWeekly = async(req, res)=>{
    const data = {
        ticker: req.body.ticker,
    }
    await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}?&apikey=ME5MBOEBZSJHFRN8`, {method: 'GET'})
    .then(response=>{

    }).then(data=>{
        const returnData = {

        };
        return res.status(200).json();
    })
}
const corestockControllerMonthly = async(req, res)=>{
    const data = {
        ticker: req.body.ticker,
    }
    await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${ticker}?&apikey=ME5MBOEBZSJHFRN8`, {method: 'GET'})
    .then(response=>{

    }).then(data=>{
        const returnData = {

        };
        return res.status(200).json();
    })
}

module.exports = {corestockControllerIntraday, corestockControllerDaily, corestockControllerWeekly, corestockControllerMonthly};