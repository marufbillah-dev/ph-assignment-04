// update all job counts
function updateJobCounts() {
  const availableSec = document.getElementById("available-jobs");
  const interviewSec = document.getElementById("interview");
  const rejectedSec = document.getElementById("rejected");

  // total jobs
  const totalCount =
    availableSec.children.length +
    interviewSec.children.length +
    rejectedSec.children.length;

  // count by status badge for interview and rejected count
  let interviewCount = 0;
  let rejectedCount = 0;
  document.querySelectorAll(".status-badge").forEach((badge) => {
    if (badge.dataset.status === "INTERVIEW") interviewCount++;
    if (badge.dataset.status === "REJECTED") rejectedCount++;
  });

  document.getElementById("total-count").innerText = totalCount;
  document.getElementById("interview-count").innerText = interviewCount;
  document.getElementById("rejected-count").innerText = rejectedCount;
}

// change active button style
function activeBtn(id) {
  const allBtn = document.getElementById("all-btn");
  const interviewBtn = document.getElementById("interview-btn");
  const rejectedBtn = document.getElementById("rejected-btn");

  const inactiveClass =
    "text-[#64748B] font-medium bg-white border border-[#F1F2F4] text-[0.75rem] px-2 rounded-sm w-20 h-8 cursor-pointer transition-all duration-200 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-sm hover:-translate-y-0.5";
  const activeClass =
    "text-white font-semibold bg-[#3B82F6] text-[0.75rem] px-2 rounded-sm w-20 h-8 cursor-pointer transition-all duration-200 hover:bg-[#2563EB] hover:shadow-md hover:-translate-y-0.5";

  allBtn.className = inactiveClass;
  interviewBtn.className = inactiveClass;
  rejectedBtn.className = inactiveClass;

  document.getElementById(id).className = activeClass;
}

// out of job counter
function outOfCounter() {
  const jobsCountEl = document.getElementById("jobs-count");
  const outOfEl = document.getElementById("out-of");

  const availableSec = document.getElementById("available-jobs");
  const interviewSec = document.getElementById("interview");
  const rejectedSec = document.getElementById("rejected");

  const total =
    availableSec.children.length +
    interviewSec.children.length +
    rejectedSec.children.length;

  const isAll = !availableSec.classList.contains("hidden");
  const isInterview = !interviewSec.classList.contains("hidden");
  const isRejected = !rejectedSec.classList.contains("hidden");

  if (isAll) {
    jobsCountEl.innerText = availableSec.children.length;
    outOfEl.innerText = "";
  } else if (isInterview) {
    jobsCountEl.innerText = interviewSec.children.length;
    outOfEl.innerText = ` of ${total}`;
  } else if (isRejected) {
    jobsCountEl.innerText = rejectedSec.children.length;
    outOfEl.innerText = ` of ${total}`;
  }

  updateJobCounts();
}

function toggleBtn(id) {
  // hide all sections
  document.getElementById("available-jobs").classList.add("hidden");
  document.getElementById("interview").classList.add("hidden");
  document.getElementById("rejected").classList.add("hidden");

  // show selected section
  document.getElementById(id).classList.remove("hidden");

  refreshView();
}

// initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // set all card status to NOT APPLIED
  document.querySelectorAll(".status-badge").forEach((badge) => {
    if (!badge.dataset.status) {
      badge.dataset.status = "NOT APPLIED";
    }
  });
  outOfCounter();
});
