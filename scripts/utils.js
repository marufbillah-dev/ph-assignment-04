// toggle for filer buttons
function toggleBtn(id) {
  // hide all elements under #jobs section
  document.getElementById("available-jobs").classList.add("hidden");
  document.getElementById("interviewed-jobs").classList.add("hidden");
  document.getElementById("rejected-jobs").classList.add("hidden");

  // display only the section clicked for
  document.getElementById(id).classList.remove("hidden");
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
  const interviewedJobsSec = document.getElementById("interviewed-jobs");

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