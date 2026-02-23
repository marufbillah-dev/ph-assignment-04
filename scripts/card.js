const jobsContainer = document.getElementById("jobs");

jobsContainer.addEventListener("click", function (event) {
  // for change card status
  if (
    event.target.nodeName === "BUTTON" &&
    (event.target.innerText.trim() === "INTERVIEW" ||
      event.target.innerText.trim() === "REJECTED")
  ) {
    const card = event.target.closest(".card");
    const statusBadge = card.querySelector(".status-badge");
    const clickedAction = event.target.innerText.trim();

    // status re-applying validation
    if (statusBadge.dataset.status === clickedAction) return;

    const isInterview = clickedAction === "INTERVIEW";
    const badgeBg = isInterview ? "bg-[#10B981]" : "bg-[#EF4444]";

    // update the badge on the card
    statusBadge.dataset.status = clickedAction;
    statusBadge.innerText = clickedAction;
    statusBadge.className = `status-badge text-[0.875rem] text-white font-medium ${badgeBg} w-fit py-2 px-3 rounded-sm`;

    refreshView();
  }
});

// filter cards by their badge to display in interview or rejected section
function refreshView() {
  const availableSec = document.getElementById("available-jobs");
  const interviewSec = document.getElementById("interview");
  const rejectedSec = document.getElementById("rejected");

  // show all card in available-jobs section
  [...interviewSec.children].forEach((c) => availableSec.appendChild(c));
  [...rejectedSec.children].forEach((c) => availableSec.appendChild(c));

  // get active tab
  const activeTab = getActiveTab();

  if (activeTab !== "available-jobs") {
    const targetStatus = activeTab === "interview" ? "INTERVIEW" : "REJECTED";
    const targetSec = activeTab === "interview" ? interviewSec : rejectedSec;

    [...availableSec.children].forEach((card) => {
      const badge = card.querySelector(".status-badge");
      if (badge && badge.dataset.status === targetStatus) {
        targetSec.appendChild(card);
      }
    });
  }

  // show no-jobs section, is there no jobs
  const activeSec = document.getElementById(activeTab);
  const noJobsSec = document.getElementById("no-jobs");
  if (activeSec.children.length === 0) {
    noJobsSec.classList.remove("hidden");
  } else {
    noJobsSec.classList.add("hidden");
  }

  outOfCounter();
}

function getActiveTab() {
  if (!document.getElementById("available-jobs").classList.contains("hidden"))
    return "available-jobs";
  if (!document.getElementById("interview").classList.contains("hidden"))
    return "interview";
  return "rejected";
}