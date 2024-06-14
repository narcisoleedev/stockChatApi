require("dotenv").config();

function getFive(timeSeries) {
  const entries = Object.entries(timeSeries);
  const firstFiveEntries = entries.slice(0, 5);
  return firstFiveEntries;
}

const corestockControllerIntraday = async (req, res) => {
  try {
    const data = {
      ticker: req.body.ticker,
      interval: req.body.interval,
    };
    console.log(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${data.ticker}&interval=${data.interval}&apikey=${process.env.APITOKEN}`,
    );
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${data.ticker}&interval=${data.interval}&apikey=${process.env.APITOKEN}`,
      { method: "GET" },
    );
    if (response.status !== 200)
      return res.status(500).json({ msg: "internal server error" });
    const responseData = await response.json();
    const returnData = {
      analysis: "Intraday",
      ticker: responseData["Meta Data"]["2. Symbol"],
      lastRefreshed: responseData["Meta Data"]["3. Last Refreshed"],
      timeSeries: getFive(responseData[`Time Series (${data.interval})`]),
    };
    return res.status(200).json(returnData);
  } catch (err) {
    return res.status(500).json({ msg: "internal server error" });
  }
};
const corestockControllerDaily = async (req, res) => {
  try {
    const data = {
      ticker: req.body.ticker,
    };
    console.log(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${data.ticker}&apikey=${process.env.APITOKEN}`,
    );
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${data.ticker}&apikey=${process.env.APITOKEN}`,
      { method: "GET" },
    );
    if (response.status !== 200)
      return res.status(500).json({ msg: "internal server error" });
    const responseData = await response.json();
    const returnData = {
      analysis: "Daily",
      ticker: responseData["Meta Data"]["2. Symbol"],
      lastRefreshed: responseData["Meta Data"]["3. Last Refreshed"],
      timeSeries: getFive(responseData["Time Series (Daily)"]),
    };
    return res.status(200).json(returnData);
  } catch (err) {
    return res.status(500).json({ msg: "internal server error" });
  }
};
const corestockControllerWeekly = async (req, res) => {
  try {
    const data = {
      ticker: req.body.ticker,
    };
    console.log(
      `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${data.ticker}&apikey=${process.env.APITOKEN}`,
    );
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${data.ticker}&apikey=${process.env.APITOKEN}`,
      { method: "GET" },
    );
    if (response.status !== 200)
      return res.status(500).json({ msg: "internal server error" });
    const responseData = await response.json();
    const returnData = {
      analysis: "Weekly",
      ticker: responseData["Meta Data"]["2. Symbol"],
      lastRefreshed: responseData["Meta Data"]["3. Last Refreshed"],
      timeSeries: getFive(responseData["Weekly Time Series"]),
    };
    return res.status(200).json(returnData);
  } catch (err) {
    return res.status(500).json({ msg: "internal server error" });
  }
};
const corestockControllerMonthly = async (req, res) => {
  try {
    const data = {
      ticker: req.body.ticker,
    };
    console.log(
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${data.ticker}&apikey=${process.env.APITOKEN}`,
    );
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${data.ticker}&apikey=${process.env.APITOKEN}`,
      { method: "GET" },
    );
    if (response.status !== 200)
      return res.status(500).json({ msg: "internal server error" });
    const responseData = await response.json();
    const returnData = {
      analysis: "Monthly",
      ticker: responseData["Meta Data"]["2. Symbol"],
      lastRefreshed: responseData["Meta Data"]["3. Last Refreshed"],
      timeSeries: getFive(responseData["Monthly Time Series"]),
    };
    return res.status(200).json(returnData);
  } catch (err) {
    return res.status(500).json({ msg: "internal server error" });
  }
};
module.exports = {
  corestockControllerIntraday,
  corestockControllerDaily,
  corestockControllerWeekly,
  corestockControllerMonthly,
};
