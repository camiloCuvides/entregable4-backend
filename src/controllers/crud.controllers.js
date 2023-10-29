const catchError = require('../utils/catchError');
const Crud = require('../models/Crud');

const getAll = catchError(async(req, res) => {
    const cruds = await Crud.findAll();
    return res.json(cruds);
})

const create = catchError(async(req, res) => {
    const { email, password, first_name, last_name, birthday } = req.body;
    const cruds = await Crud.create({
        email,
        password,
        first_name,
        last_name,
        birthday
    });
    return res.status(201).json(cruds);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Crud.destroy({ where: { id }});
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { email, password, first_name, last_name,  birthday } = req.body;
    const crud = await Crud.update(
        { email, password, first_name, last_name, birthday },
        { where: { id }, returning: true }
    );
    return res.json(crud);
});




module.exports = {
    getAll,
    create,
    remove,
    update,
}