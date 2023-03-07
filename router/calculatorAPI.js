const express = require("express");
const router = express.Router();
module.exports = router

router.post("/ci", async (req, res) => {
    const { principal, time, rate, n } = req.body;
    if (!principal || !time || !rate || !n) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }
    try {

        const amount = principal * (Math.pow((1 + (rate / n)), (n * time)));
        const interest = amount - principal;

        res.status(201).json({ principal: principal, interest: interest, amount: amount });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})


router.post("/amount", async (req, res) => {
    const { principal, time, rate, n } = req.body;
    if (!principal || !time || !rate || !n) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }
    try {

        const amount = principal * (Math.pow((1 + (rate / n)), (n * time)));
        const interest = amount - principal;

        res.status(201).json({ principal: principal, interest: interest, amount: amount });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})

router.post("/calculatePrincipalfromCI", async (req, res) => {
    const { ci, time, rate, n } = req.body;
    if (!ci || !time || !rate || !n) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }

    try {

        const principal = ci/ (Math.pow(1 + (rate/n), (n * time)) - 1)
        const amount = parseFloat(principal) + parseFloat(ci)

        res.status(201).json({ principal: principal, interest: ci, amount: amount});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})


router.post("/calculatePrincipalfromAmount", async (req, res) => {
    const { amount, time, rate, n } = req.body;
    if (!amount || !time || !rate || !n) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }

    try {

        const principal = amount/ (Math.pow(1 + (rate/n), (n * time)))
        const ci = parseFloat(amount) - parseFloat(principal)

        res.status(201).json({ principal: principal, interest: ci, amount: amount});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})

router.post("/calculateROIFromAmount", async (req, res) => {
    const { amount, principal, time, n } = req.body;
    if (!amount || !principal || !time || !n) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }

    try {

        const rate = n * (Math.pow((amount/principal), 1/(n * time)) - 1)
        console.log(rate);

        res.status(201).json({ principal: principal, rate: rate, amount: amount});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})

router.post("/calculateROIFromCI", async (req, res) => {
    const { ci, principal, time, n } = req.body;
    if (!ci || !principal || !time || !n) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }

    try {

        const amount = parseFloat(principal) + parseFloat(ci)
        const rate = n * (Math.pow((amount/principal), 1/(n * time)) - 1)
        console.log(rate);

        res.status(201).json({ principal: principal, rate: rate, ci: ci});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})


router.post("/calculateTimefromAmount", async (req, res) => {
    const { amount, principal, rate, n } = req.body;
    if (!amount || !principal || !rate || !n) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }

    try {

        const time = Math.log(amount/principal) / (n * Math.log(1 + (rate/n)))

        res.status(201).json({ principal: principal, time: time, amount: amount});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})

router.post("/calculateTimefromCI", async (req, res) => {
    const { ci, principal, rate, n } = req.body;
    if (!ci || !principal || !rate || !n) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }

    try {

        const amount = parseFloat(principal) + parseFloat(ci) 
        const time = Math.log(amount/principal) / (n * Math.log(1 + (rate/n)))

        res.status(201).json({ principal: principal, time: time, amount: amount});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})


router.post("/calculateNFromAmount", async (req, res) => {
    const { amount, principal, time, rate } = req.body;
    if (!amount || !principal || !time || !rate) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }

    try {

        const n = rate / (Math.pow((amount/principal), 1/(n * time)) - 1)
        console.log(rate);

        res.status(201).json({ principal: principal, rate: rate, amount: amount});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})

router.post("/calculateNFromCI", async (req, res) => {
    const { ci, principal, time, rate } = req.body;
    if (!ci || !principal || !time || !rate) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }

    try {

        const amount = parseFloat(principal) + parseFloat(ci)
        const n = rate / (Math.pow((amount/principal), 1/(n * time)) - 1)
        console.log(rate);

        res.status(201).json({ principal: principal, rate: rate, ci: ci});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})