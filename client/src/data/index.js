/* 
  - Constants for sidebar, navbar, and button configurations.
  - Manages navigation and filtering (complaints, leave, feedback).
  - Centralizes link/button data for UI consistency.
*/

const sidebarLinks = [
  { name: "Dashboard", iconClass: "far fa-square", link: "/", childrens: [] },
  {
    name: "Employee Management",
    iconClass: "far fa-user",
    childrens: [
      { name: "Employees Details", link: "/employees" },
      { name: "Create Employee", link: "/employee/create" },
    ],
  },
  { name: "Department & Roles", iconClass: "far fa-building", link: "/" },
  {
    name: "Attendance Management",
    iconClass: "far fa-calendar-check",
    link: "/attendance",
  },
  {
    name: "Recruitment Management",
    iconClass: "far fa-id-card",
    childrens: [
      { name: "View Applications", link: "/recruitment/applications" },
      { name: "Post Applications", link: "/recruitment/create" },
    ],
  },
  {
    name: "Payroll Management",
    iconClass: "far fa-credit-card",
    link: "/payroll",
    childrens: [],
  },
  {
    name: "Leave Management",
    iconClass: "far fa-calendar-alt",
    childrens: [
      { name: "Leave Requests", link: "/leaves" },
      { name: "Employees On Leave", link: "/leave/active" },
    ],
  },
  {
    name: "Performance Management",
    iconClass: "fas fa-chart-line",
    link: "/performances",
    childrens: [],
  },
  {
    name: "Complaint Management",
    iconClass: "far fa-bell",
    link: "/complaints",
    childrens: [],
  },
  {
    name: "Feedback Management",
    iconClass: "far fa-comments",
    link: "/feedbacks",
    childrens: [],
  },
  {
    name: "Reports & Analytics",
    iconClass: "far fa-chart-bar",
    link: "/reports",
    childrens: [],
  },
  {
    name: "Settings",
    iconClass: "far fa-circle",
    link: "/settings",
    childrens: [],
  },
];

const navbarLinks = [
  { name: "Home Page", iconClass: "fa fa-home", link: "/" },
  {
    name: "Mark Attendance",
    iconClass: "fa fa-calendar-check",
    link: "/attendance/mark",
  },
  {
    name: "Attendance Tracking",
    iconClass: "fa fa-calendar-check",
    link: "/attendance",
  },
  {
    name: "Apply for Leave",
    iconClass: "fa fa-calendar-check",
    link: "/leave",
  },
  {
    name: "Make a Complaint",
    iconClass: "fa fa-exclamation-circle",
    link: "/complaint",
  },
  { name: "Submit Feedback", iconClass: "fa fa-comment", link: "/feedback" },
  {
    name: "Account Security",
    iconClass: "fa fa-shield-alt",
    link: "/security",
  },
];

const complaintButtons = [
  {
    label: "Pending Complaints",
    value: "Pending",
    icon: "fas fa-hourglass-half",
  },
  {
    label: "Resolved Complaints",
    value: "Resolved",
    icon: "fas fa-check-circle",
  },
  { label: "Closed Complaints", value: "Closed", icon: "fas fa-times-circle" },
];

const leaveRequestButtons = [
  { label: "Pending Leaves", value: "Pending", icon: "fas fa-hourglass-half" },
  { label: "Approved Leaves", value: "Approved", icon: "fas fa-check-circle" },
  { label: "Rejected Leaves", value: "Rejected", icon: "fas fa-times-circle" },
];

const employeesOnLeaveButtons = [
  { label: "Yesterday Leaves", value: "Yesterday", icon: "fa-arrow-left" },
  { label: "Present Leaves", value: "Present", icon: "fa-calendar-check" },
  { label: "Tommorow Leaves", value: "Tomorrow", icon: "fa-arrow-right" },
];

const feedbackButtons = [
  { label: "All Feedbacks", value: "", icon: "fa-globe" },
  { label: "Positive Feedbacks", value: "positive", icon: "fa-thumbs-up" },
  { label: "Neutral Feedbacks", value: "neutral", icon: "fa-hand-paper" },
  { label: "Negative Feedbacks", value: "negative", icon: "fa-thumbs-down" },
];

const performanceButtons = [
  { label: "All Metrices", value: "", icon: "fa-globe" },
  { label: "Good metrices", value: "good", icon: "fa-thumbs-up" },
  { label: "Average metrices", value: "average", icon: "fa-hand-paper" },
  { label: "Poort metrices", value: "poor", icon: "fa-thumbs-down" },
];

const payrollButtons = [
  { label: "All Payrolls", value: "", icon: "fa-globe" },
  { label: "Paid payrolls", value: "paid", icon: "fa-thumbs-up" },
  { label: "Pending payrolls", value: "pending", icon: "fa-hand-paper" },
  { label: "Failed payrolls", value: "failed", icon: "fa-thumbs-down" },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/attendance/mark", label: "Mark" },
  { to: "/security", label: "Security" },
  { to: "/attendance", label: "Attendance" },
  { to: "/leave", label: "Leave" },
  { to: "/complaint", label: "Complaint" },
  { to: "/feedback", label: "Feedback" },
];

export {
  sidebarLinks,
  navbarLinks,
  complaintButtons,
  leaveRequestButtons,
  employeesOnLeaveButtons,
  feedbackButtons,
  navLinks,
  performanceButtons,
  payrollButtons
};
