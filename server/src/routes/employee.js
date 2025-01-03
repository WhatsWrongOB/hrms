import express from "express";
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
  updateProfilePicture,
} from "../controllers/employee.js";
import { verifyAdminToken, verifyEmployeeToken } from "../middlewares/index.js";
import { upload } from "../config/index.js";

const router = express.Router();

router.post("/", verifyAdminToken, createEmployee);
router.get("/", verifyAdminToken, getAllEmployees);
router.patch(
  "/profile",
  verifyEmployeeToken,
  upload.single("profilePicture"),
  updateProfilePicture
);
router.get("/:employeeID", verifyEmployeeToken, getEmployeeById);
router.delete("/:employeeID", verifyAdminToken, deleteEmployee);
router.patch("/:employeeID", verifyEmployeeToken, updateEmployee);

export default router;
