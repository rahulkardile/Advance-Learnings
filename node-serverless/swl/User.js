const express = require("express");
const ErrorHandler = require("../utils/ErrorHandler.js");

const data = [];

const routes = express.Router();

routes.get("/", (req, res, next) => {
    try {
        res.send("server is running fine!");
    } catch (error) {
        next(error);
    }
});

routes.get("/get", (req, res, next) => {
    try {
        if (!data || data.length === 0) return next(ErrorHandler(404, "There is no data, Please add data first!"));

        const page = parseInt(req.query.page) || 1;
        const startIndex = (page - 1) * 5;
        const endIndex = startIndex + 5;

        const paginatedData = data.slice(startIndex, endIndex);

        res.status(200).json({
            success: true,
            totalData: data.length,
            data: paginatedData
        });
    } catch (error) {
        next(error);
    }
});

routes.get("/get/:id", (req, res, next) => {
    try {
        const id = req.params.id;
        const expectedData = data.find((item) => item.id == id);

        if (!expectedData) return next(ErrorHandler(404, "not found!"));

        res.status(200).json({
            success: true,
            data: expectedData
        });
    } catch (error) {
        next(error);
    }
});

routes.post('/create', (req, res, next) => {
    try {
        const { title, description } = req.body;

        if (!title) return next(ErrorHandler(404, "title is missing!"));
        if (!description) return next(ErrorHandler(404, "description is missing!"));

        const newData = {
            id: String(Date.now()),
            title,
            description
        };

        data.push(newData);

        res.status(200).json({
            message: "data has been created!",
            success: true
        });

        console.log(data);
    } catch (error) {
        next(error);
    }
});

routes.put("/update/:id", (req, res, next) => {
    try {
        const id = req.params.id;
        const { title, description } = req.body;

        if (!title && !description) return next(ErrorHandler(406, "please provide at least title or description"));

        let found = false;

        data.forEach((item, index) => {
            if (item.id == id) {
                found = true;

                if (title) {
                    data[index].title = title;
                }

                if (description) {
                    data[index].description = description;
                }

                res.status(200).json({
                    success: true,
                    data: data[index]
                });
            }
        });

        if (!found) return next(ErrorHandler(404, "Not found!"));
    } catch (error) {
        next(error);
    }
});

routes.delete("/delete/:id", (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id) return next(ErrorHandler(404, "Id not found"));

        const removeIndex = data.findIndex(item => item.id === id);

        if (removeIndex === -1) {
            return res.status(404
