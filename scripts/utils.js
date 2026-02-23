// variables
// jobs counter
const totalJobs = document.getElementById("available-jobs").children.length;
const interviewedJobs = document.getElementById("interview").children.length;
const rejectedJobs = document.getElementById("rejected").children.length;

// jobs counter card (total)
const totalCountElement = document.getElementById("total-count");
const totalCount = (totalCountElement.innerText = totalJobs);

const interviewCountElement = document.getElementById("interview-count");

const rejectedCountElement = document.getElementById("rejected-count");


// available jobs counter
const jobsCountElement = document.getElementById("jobs-count");
jobsCountElement.innerText = totalJobs;

// toggle for filer buttons
function toggleBtn(id) {
  // hide all elements under #jobs section
  document.getElementById("available-jobs").classList.add("hidden");
  document.getElementById("interview").classList.add("hidden");
  document.getElementById("rejected").classList.add("hidden");

  // display only the section clicked for
  document.getElementById(id).classList.remove("hidden");

  // show no job section, if there no jobs available
  const noJobsSec = document.getElementById("no-jobs");
  const selected = document.getElementById(id);
  if (selected.children.length === 0) {
    noJobsSec.classList.remove("hidden");
  } else {
    noJobsSec.classList.add("hidden");
  }
}

// change active button style
function activeBtn(id) {
  const allBtn = document.getElementById("all-btn");
  const interviewBtn = document.getElementById("interview-btn");
  const rejectedBtn = document.getElementById("rejected-btn");

  allBtn.className =
    "text-[#64748B] font-medium bg-white border border-[#F1F2F4] text-[0.75rem] px-2 rounded-sm w-20 h-8 cursor-pointer transition-all duration-200 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-sm hover:-translate-y-0.5";

  interviewBtn.className =
    "text-[#64748B] font-medium bg-white border border-[#F1F2F4] text-[0.75rem] px-2 rounded-sm w-20 h-8 cursor-pointer transition-all duration-200 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-sm hover:-translate-y-0.5";

  rejectedBtn.className =
    "text-[#64748B] font-medium bg-white border border-[#F1F2F4] text-[0.75rem] px-2 rounded-sm w-20 h-8 cursor-pointer transition-all duration-200 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-sm hover:-translate-y-0.5";

  const activeBtn = document.getElementById(id);
  activeBtn.className =
    "text-white font-semibold bg-[#3B82F6] text-[0.75rem] px-2 rounded-sm w-20 h-8 cursor-pointer transition-all duration-200 hover:bg-[#2563EB] hover:shadow-md hover:-translate-y-0.5";
}

// out of counter
function outOfCounter() {
  const outOfElement = document.getElementById("out-of");
  const availableJobsSec = document.getElementById("available-jobs");
  const interviewedJobsSec = document.getElementById("interview");

  if (interviewedJobsSec.classList.contains("hidden") === false) {
    if (availableJobsSec.classList.contains("hidden") === true) {
      jobsCountElement.innerText = interviewedJobs;
      outOfElement.innerHTML = ` of ${totalJobs}`;
    } else {
      jobsCountElement.innerText = totalJobs;
      outOfElement.innerHTML = "";
    }
  } else {
    if (availableJobsSec.classList.contains("hidden") === true) {
      jobsCountElement.innerText = rejectedJobs;
      outOfElement.innerHTML = ` of ${totalJobs}`;
    } else {
      jobsCountElement.innerText = totalJobs;
      outOfElement.innerHTML = "";
    }
  }
}

// set job status
function setStatus() {}
