const express = require("express");

const {
  createTour,
  getAllTours,
  getTourById,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tours
 *   description: Tour Management APIs
 */

/**
 * @swagger
 * /tour:
 *   get:
 *     summary: Get all tours
 *     tags: [Tours]
 *     description: Fetch all available tours with optional pagination and search.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of records per page
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Search tours by title
 *     responses:
 *       200:
 *         description: Tours fetched successfully
 */
router.get("/", getAllTours);

/**
 * @swagger
 * /tour/{id}:
 *   get:
 *     summary: Get tour by MongoDB ID
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId
 *     responses:
 *       200:
 *         description: Tour found successfully
 *       404:
 *         description: Tour not found
 */
router.get("/:id", getTourById);

/**
 * @swagger
 * /tour:
 *   post:
 *     summary: Create a new tour
 *     tags: [Tours]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tour_id
 *               - title
 *               - description
 *               - pick_up
 *               - meeting_point
 *               - drop_off
 *               - duration
 *             properties:
 *               tour_id:
 *                 type: integer
 *                 example: 90001
 *               title:
 *                 type: string
 *                 example: Goa Adventure
 *               description:
 *                 type: string
 *                 example: Beach vacation in Goa
 *               pick_up:
 *                 type: string
 *                 example: Mumbai
 *               meeting_point:
 *                 type: string
 *                 example: Mumbai Airport
 *               drop_off:
 *                 type: string
 *                 example: Mumbai
 *               duration:
 *                 type: number
 *                 example: 4
 *               duration_unit:
 *                 type: string
 *                 example: days
 *     responses:
 *       201:
 *         description: Tour created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", createTour);

/**
 * @swagger
 * /tour/{id}:
 *   put:
 *     summary: Update an existing tour
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               title: Goa Luxury Tour
 *               duration: 5
 *     responses:
 *       200:
 *         description: Tour updated successfully
 *       404:
 *         description: Tour not found
 */
router.put("/:id", updateTour);

/**
 * @swagger
 * /tour/{id}:
 *   delete:
 *     summary: Delete a tour
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId
 *     responses:
 *       200:
 *         description: Tour deleted successfully
 *       404:
 *         description: Tour not found
 */
router.delete("/:id", deleteTour);

module.exports = router;