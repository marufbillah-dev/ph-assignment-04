// jobs counter
const availableJobs = document.getElementById("available-jobs").children.length;

const totalCountElement = document.getElementById("total-count");
const totalCount = (totalCountElement.innerText = availableJobs);
const jobsCountElement = document.getElementById("jobs-count");
const jobsCount = (jobsCountElement.innerText = availableJobs);
