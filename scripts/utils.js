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

// job count (like 5 out 10 jobs)
function outOfCounter() {
  const jobsCountElement = document.getElementById("jobs-count");
  const outOfElement = document.getElementById("out-of");
  
  const total = document.querySelectorAll(".card").length;
  const availableCount = document.getElementById("available-jobs").children.length;
  const interviewCount = document.getElementById("interview").children.length;
  const rejectedCount = document.getElementById("rejected").children.length;

  // show "out of" to selected button section
  const isAll = !document.getElementById("available-jobs").classList.contains("hidden");
  const isInterview = !document.getElementById("interview").classList.contains("hidden");
  const isRejected = !document.getElementById("rejected").classList.contains("hidden");

  if (isAll) {
    jobsCountElement.innerText = availableCount;
    outOfElement.innerText = "";
  } else if (isInterview) {
    jobsCountElement.innerText = interviewCount;
    outOfElement.innerText = ` of ${total}`;
  } else if (isRejected) {
    jobsCountElement.innerText = rejectedCount;
    outOfElement.innerText = ` of ${total}`;
  }
}

function toggleBtn(id) {
  // hide all section
  document.getElementById("available-jobs").classList.add("hidden");
  document.getElementById("interview").classList.add("hidden");
  document.getElementById("rejected").classList.add("hidden");

  // show selected section
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");

  // show no jobs if there is no jobs
  const noJobsSec = document.getElementById("no-jobs");
  if (selected.children.length === 0) {
    noJobsSec.classList.remove("hidden");
  } else {
    noJobsSec.classList.add("hidden");
  }
  
  outOfCounter();
}