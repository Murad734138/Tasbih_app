let currentCount = 0;
let completedSessions = 0;
let maxCountPerSession = 100;
let targetSessions = 10;

function applySettings() {
  const maxInput = parseInt(document.getElementById("maxCountInput").value);
  const goalInput = parseInt(document.getElementById("goalSessionInput").value);

  if (maxInput > 0) maxCountPerSession = maxInput;
  if (goalInput > 0) targetSessions = goalInput;

  document.getElementById("maxCountDisplay").textContent = maxCountPerSession;
  resetCounter();

  // Add visual feedback
  const btn = event.target;
  btn.textContent = "Applied! ✓";
  btn.style.background = "#28a745";
  setTimeout(() => {
    btn.textContent = "Apply Settings";
    btn.style.background = "";
  }, 1500);
}

function incrementCount() {
  currentCount++;

  if (currentCount > maxCountPerSession) {
    completedSessions++;
    currentCount = 1;

    // Add celebration animation
    document.querySelector(".container").classList.add("celebration");
    setTimeout(() => {
      document.querySelector(".container").classList.remove("celebration");
    }, 600);
  }

  updateDisplay();
}

function resetCounter() {
  currentCount = 0;
  completedSessions = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("currentCounter").textContent = currentCount;
  document.getElementById("sessionCounter").textContent = completedSessions;

  // Update progress bar
  const progressPercentage = (currentCount / maxCountPerSession) * 100;
  document.getElementById("progressBar").style.width = progressPercentage + "%";

  // Update status message
  const messageElement = document.getElementById("statusMessage");

  if (completedSessions < targetSessions) {
    messageElement.textContent = `🚀 Great progress! ${
      targetSessions - completedSessions
    } sessions remaining to reach your goal.`;
    messageElement.className = "message encouraging";
  } else {
    messageElement.textContent = `🎉 Congratulations! You've successfully completed your goal of ${targetSessions} sessions!`;
    messageElement.className = "message success";
  }
}

// Initialize display
updateDisplay();
