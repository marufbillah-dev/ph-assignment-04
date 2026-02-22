// jobs counter
const totalJobs = document.getElementById("available-jobs").children.length;
const interviewedJobs =
  document.getElementById("interviewed-jobs").children.length;
const rejectedJobs = document.getElementById("rejected-jobs").children.length;

// jobs counter card (total, interview and rejected)
const totalCountElement = document.getElementById("total-count");
const totalCount = (totalCountElement.innerText = totalJobs);

const interviewCountElement = document.getElementById("interview-count");
const interviewCount = (interviewCountElement.innerText = interviewedJobs);

const rejectedCountElement = document.getElementById("rejected-count");
const rejectedCount = (rejectedCountElement.innerText = rejectedJobs);

// available jobs counter
const jobsCountElement = document.getElementById("jobs-count");
jobsCountElement.innerText = totalJobs;
