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


  }
});

