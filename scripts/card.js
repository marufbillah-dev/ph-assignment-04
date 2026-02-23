const jobsContainer = document.getElementById("jobs");
jobsContainer.addEventListener("click", function (event) {
  const cardContainer = event.target.parentNode.parentNode;

  // dynamic card info
  const title = cardContainer.querySelector(".title").innerText;
  const desig = cardContainer.querySelector(".desig").innerText;
  const typeNSalary = cardContainer.querySelector(".type-n-salary").innerText;
  const responsibility =
    cardContainer.querySelector(".responsibility").innerText;

  if (event.target.nodeName === "BUTTON") {
    // crate card parent and append
    const dynamicCard = document.createElement("div");
    dynamicCard.className =
      "card space-y-5 bg-white border border-[#F1F2F4] rounded-lg p-6 transition-all duration-200 hover:border-[#3B82F6] hover:shadow-sm hover:-translate-y-0.5";
    dynamicCard.innerHTML = `
    <div class="card-heading flex justify-between items-center">
                  <div class=" space-y-1">
                    <h3 class="title text-[1.125rem] text-[#002C5C] font-semibold">
                      ${title}
                    </h3>
                    <h4 class="desig text-[1rem] text-[#64748B] font-normal">
                      ${desig}
                    </h4>
                  </div>
                  <button
                    id="delete-job"
                    class="border border-[#F1F2F4] text-[#64748B] rounded-full w-fit p-2 flex items-center justify-center aspect-square cursor-pointer transition-all duration-200 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </div>
                <p class="type-n-salary text-[0.875rem] text-[#64748B]">
                  ${typeNSalary}
                </p>
                <div class="space-y-2">
                  <p
                    class="status-badge text-[0.875rem] text-[#002C5C] font-medium bg-[#EEF4FF] w-fit py-2 px-3 rounded-sm"
                  >
                    NOT APPLIED
                  </p>
                  <p class="responsibility text-[0.875rem] text-[#323B49] font-medium">
                    ${responsibility}
                  </p>
                </div>
                <div class="action-buttons space-x-2">
                  <button
                    class="status-badge text-[0.875rem] text-[#10B981] border border-[#10B981] font-medium w-fit py-2 px-3 rounded-sm cursor-pointer transition-all duration-200 hover:bg-[#10B981] hover:text-white hover:shadow-sm hover:-translate-y-0.5"
                  >
                    INTERVIEW
                  </button>
                  <button
                    class="status-badge text-[0.875rem] text-[#EF4444] border border-[#EF4444] font-medium w-fit py-2 px-3 rounded-sm cursor-pointer transition-all duration-200 hover:bg-[#EF4444] hover:text-white hover:shadow-sm hover:-translate-y-0.5"
                  >
                    REJECTED
                  </button>
                </div>
`;
    const interviewSec = document.getElementById("interview");
    const rejectedSec = document.getElementById("rejected");
    const status = cardContainer.querySelector(".status-badge");
    const dynamicStatus = dynamicCard.querySelector(".status-badge");

    if (event.target.innerText === "INTERVIEW") {
      // set INTERVIEW status
      if (status.innerText !== "INTERVIEW") {
        interviewSec.appendChild(dynamicCard);

        status.innerText = "INTERVIEW";
        status.className =
          "status-badge text-[0.875rem] text-white font-medium bg-[#10B981] w-fit py-2 px-3 rounded-sm";
        dynamicStatus.innerText = "INTERVIEW";
        dynamicStatus.className =
          "status-badge text-[0.875rem] text-white font-medium bg-[#10B981] w-fit py-2 px-3 rounded-sm";
      }
    } else {
      // set REJECTED status
      if (status.innerText !== "REJECTED") {
        rejectedSec.appendChild(dynamicCard);

        status.innerText = "REJECTED";
        status.className =
          "status-badge text-[0.875rem] text-white font-medium bg-[#EF4444] w-fit py-2 px-3 rounded-sm";
        dynamicStatus.innerText = "REJECTED";
        dynamicStatus.className =
          "status-badge text-[0.875rem] text-white font-medium bg-[#EF4444] w-fit py-2 px-3 rounded-sm";
      }
    }

    // count jobs after append
    const interviewedJobs =
      document.getElementById("interview").children.length;
    const rejectedJobs = document.getElementById("rejected").children.length;

    interviewCountElement.innerText = interviewedJobs;
    rejectedCountElement.innerText = rejectedJobs;

    const jobsCountElement = document.getElementById("jobs-count");
    jobsCountElement.innerText = totalJobs;
  }
});
