const QUESTIONS = [
  {
    category: "Biologie",
    items: [
      {
        value: 100,
        question: "Wie nennt man die kleinste Einheit des Lebens?",
        answer: "Zelle"
      },
      {
        value: 200,
        question: "Welches Organ pumpt das Blut durch den Körper?",
        answer: "Herz"
      }
    ]
  },
  {
    category: "Pflege Basics",
    items: [
      {
        value: 100,
        question: "Was sollte man vor und nach jedem Patientenkontakt tun?",
        answer: "Hände waschen / desinfizieren"
      },
      {
        value: 200,
        question: "Was bedeutet „Mobilisation“ in der Pflege?",
        answer: "Bewegung fördern / Patienten bewegen"
      }
    ]
  },
  {
    category: "Unser Körper",
    items: [
      {
        value: 100,
        question: "Wie viele Lungenflügel hat ein Mensch?",
        answer: "Zwei"
      },
      {
        value: 200,
        question: "Wie nennt man den Druck des Blutes in den Gefäßen?",
        answer: "Blutdruck"
      }
    ]
  },
  {
    category: "Hygiene",
    items: [
      {
        value: 100,
        question: "Warum ist Händedesinfektion wichtig?",
        answer: "Um Keime zu vermeiden / Infektionen zu verhindern"
      },
      {
        value: 200,
        question: "Wie nennt man Schutzkleidung wie Handschuhe und Maske?",
        answer: "Schutzausrüstung"
      }
    ]
  },
  {
    category: "Gesundheit",
    items: [
      {
        value: 100,
        question: "Wie viele Stunden Schlaf brauchen Jugendliche ungefähr pro Nacht?",
        answer: "Etwa 8-10 Stunden"
      },
      {
        value: 200,
        question: "Warum ist Bewegung wichtig für den Körper?",
        answer: "Hält gesund / stärkt Muskeln und Herz"
      }
    ]
  }
];

const STORAGE_KEY = "bfe-jeopardy-state-v1";
const TIMER_START = 60;

const els = {
  board: document.querySelector("#board"),
  dialog: document.querySelector("#questionDialog"),
  questionMeta: document.querySelector("#questionMeta"),
  questionTitle: document.querySelector("#questionTitle"),
  answerText: document.querySelector("#answerText"),
  revealAnswer: document.querySelector("#revealAnswer"),
  closeDialog: document.querySelector("#closeDialog"),
  timerValue: document.querySelector("#timerValue"),
  startTimer: document.querySelector("#startTimer"),
  pauseTimer: document.querySelector("#pauseTimer"),
  resetTimer: document.querySelector("#resetTimer"),
  markPlayed: document.querySelector("#markPlayed"),
  awardTeamOne: document.querySelector("#awardTeamOne"),
  awardTeamTwo: document.querySelector("#awardTeamTwo"),
  resetGame: document.querySelector("#resetGame"),
  teamNames: [
    document.querySelector("#teamOneName"),
    document.querySelector("#teamTwoName")
  ],
  teamScores: [
    document.querySelector("#teamOneScore"),
    document.querySelector("#teamTwoScore")
  ]
};

let state = loadState();
let activeQuestion = null;
let timer = {
  remaining: TIMER_START,
  id: null
};

function defaultState() {
  return {
    teams: [
      { name: "Team 1", score: 0 },
      { name: "Team 2", score: 0 }
    ],
    answered: {}
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState(), ...saved } : defaultState();
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function questionId(categoryIndex, itemIndex) {
  return `${categoryIndex}-${itemIndex}`;
}

function renderBoard() {
  els.board.innerHTML = "";

  QUESTIONS.forEach((category, categoryIndex) => {
    const column = document.createElement("article");
    column.className = "category-column";

    const heading = document.createElement("div");
    heading.className = "category-title";
    heading.textContent = category.category;
    column.append(heading);

    category.items.forEach((item, itemIndex) => {
      const id = questionId(categoryIndex, itemIndex);
      const card = document.createElement("button");
      card.className = "question-card";
      card.type = "button";
      card.textContent = item.value;
      card.disabled = Boolean(state.answered[id]);
      card.setAttribute("aria-label", `${category.category} für ${item.value} Punkte`);
      card.addEventListener("click", () => openQuestion(categoryIndex, itemIndex));
      column.append(card);
    });

    els.board.append(column);
  });
}

function renderScore() {
  state.teams.forEach((team, index) => {
    els.teamNames[index].value = team.name;
    els.teamScores[index].textContent = team.score;
  });

  if (activeQuestion) {
    els.awardTeamOne.textContent = `${state.teams[0].name} richtig +${activeQuestion.value}`;
    els.awardTeamTwo.textContent = `${state.teams[1].name} richtig +${activeQuestion.value}`;
  }
}

function openQuestion(categoryIndex, itemIndex) {
  const category = QUESTIONS[categoryIndex];
  const item = category.items[itemIndex];
  activeQuestion = {
    ...item,
    id: questionId(categoryIndex, itemIndex),
    category: category.category
  };

  stopTimer();
  timer.remaining = TIMER_START;
  renderTimer();

  els.questionMeta.textContent = `${activeQuestion.category} · ${activeQuestion.value} Punkte`;
  els.questionTitle.textContent = activeQuestion.question;
  els.answerText.textContent = "Antwort ist verdeckt.";
  els.answerText.classList.add("is-hidden");
  els.revealAnswer.hidden = false;
  renderScore();

  if (typeof els.dialog.showModal === "function") {
    els.dialog.showModal();
  } else {
    els.dialog.setAttribute("open", "");
  }
}

function closeQuestion(markAnswered = false) {
  stopTimer();

  if (activeQuestion && markAnswered) {
    state.answered[activeQuestion.id] = true;
    saveState();
  }

  activeQuestion = null;
  els.dialog.close();
  renderBoard();
  renderScore();
}

function revealAnswer() {
  if (!activeQuestion) return;
  els.answerText.textContent = `Antwort: ${activeQuestion.answer}`;
  els.answerText.classList.remove("is-hidden");
  els.revealAnswer.hidden = true;
}

function award(teamIndex) {
  if (!activeQuestion) return;
  state.teams[teamIndex].score += activeQuestion.value;
  closeQuestion(true);
}

function adjustScore(teamIndex, delta) {
  state.teams[teamIndex].score += delta;
  saveState();
  renderScore();
}

function startTimer() {
  if (timer.id || timer.remaining <= 0) return;

  timer.id = window.setInterval(() => {
    timer.remaining = Math.max(0, timer.remaining - 1);
    renderTimer();

    if (timer.remaining === 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  if (!timer.id) return;
  window.clearInterval(timer.id);
  timer.id = null;
}

function resetTimer() {
  stopTimer();
  timer.remaining = TIMER_START;
  renderTimer();
}

function renderTimer() {
  els.timerValue.textContent = timer.remaining;
}

function resetGame() {
  const shouldReset = window.confirm("Spielstand und gespielte Fragen zurücksetzen?");
  if (!shouldReset) return;

  const names = state.teams.map((team) => team.name);
  state = defaultState();
  state.teams.forEach((team, index) => {
    team.name = names[index] || team.name;
  });

  saveState();
  renderBoard();
  renderScore();
}

els.revealAnswer.addEventListener("click", revealAnswer);
els.closeDialog.addEventListener("click", () => closeQuestion(false));
els.markPlayed.addEventListener("click", () => closeQuestion(true));
els.awardTeamOne.addEventListener("click", () => award(0));
els.awardTeamTwo.addEventListener("click", () => award(1));
els.startTimer.addEventListener("click", startTimer);
els.pauseTimer.addEventListener("click", stopTimer);
els.resetTimer.addEventListener("click", resetTimer);
els.resetGame.addEventListener("click", resetGame);

document.querySelectorAll(".score-adjust").forEach((button) => {
  button.addEventListener("click", () => {
    adjustScore(Number(button.dataset.team), Number(button.dataset.delta));
  });
});

els.teamNames.forEach((input, index) => {
  input.addEventListener("input", () => {
    state.teams[index].name = input.value.trim() || `Team ${index + 1}`;
    saveState();
    renderScore();
  });
});

els.dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeQuestion(false);
});

window.addEventListener("keydown", (event) => {
  if (!activeQuestion) return;

  if (event.key === " ") {
    event.preventDefault();
    revealAnswer();
  }

  if (event.key === "Escape") {
    closeQuestion(false);
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

renderBoard();
renderScore();
