const brandService = require('../services/brand');

const createBrand = async (req, res) => {
  const { brand } = req.body;
  try {
    await brandService.create(brand);
    return res.status(200).json({ brand });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findAll = async (req, res) => {
  const { query } = req.query;
  try {
    const brand = await brandService.findAll(query);
    return res.status(200).json(brand);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findByName = async (req, res) => {
  const { query } = req.query;
  try {
    const brand = await brandService.findByName(query);
    return res.status(200).json(brand);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteById = async (req, res) => {
  const { brandId } = req.params;
  try {
    const data = await brandService.deleteById(brandId);
    return res.status(200).json(data.ok);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateById = async (req, res) => {
  const { brandId } = req.params;
  const { brandData } = req.body;
  try {
    const data = await brandService.updateById(brandId, brandData);
    return res.status.json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  findAll,
  createBrand,
  deleteById,
  updateById,
  findByName,
};
