import Leave from "../models/leave.js";
import Complaint from "../models/complaint.js";
import { catchErrors } from "../utils/index.js";

const getUpdates = catchErrors(async (req, res) => {
  const employee = req.user;

  const leaveUpdates = await Leave.find({ employee })
    .sort({ createdAt: -1 })
    .limit(5);
  const complaintUpdates = await Complaint.find({ employee })
    .sort({ createdAt: -1 })
    .limit(5);

  const updates = [...leaveUpdates, ...complaintUpdates];

  return res.status(200).json({
    success: true,
    message: "Updates fetched successfully",
    updates,
  });
});

export { getUpdates };