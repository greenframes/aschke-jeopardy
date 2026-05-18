const QUESTIONS = [
  {
    category: "Gesund leben",
    items: [
      {
        value: 100,
        variants: [
          {
            question: "Welches Getränk ist im Alltag meistens die beste Wahl für den Körper?",
            answer: "Wasser oder ungesüßter Tee."
          },
          {
            question: "Was ist besser für den Körper: den ganzen Tag sitzen oder zwischendurch bewegen?",
            answer: "Zwischendurch bewegen."
          },
          {
            question: "Was hilft oft, wenn man sich schlapp oder unkonzentriert fühlt?",
            answer: "Eine kurze Pause, frische Luft oder etwas trinken."
          },
          {
            question: "Was tut dem Körper gut, wenn man lange am Handy oder Tablet war?",
            answer: "Bildschirmpause machen und sich kurz bewegen."
          }
        ]
      },
      {
        value: 200,
        variants: [
          {
            question: "Warum ist ausreichend Schlaf wichtig?",
            answer: "Der Körper kann sich erholen und neue Energie sammeln."
          },
          {
            question: "Was kann passieren, wenn man dauerhaft zu wenig schläft?",
            answer: "Man ist müde, unkonzentriert oder schneller gereizt."
          },
          {
            question: "Was hilft eher beim Einschlafen: Ruhe oder Scrollen bis spät in die Nacht?",
            answer: "Ruhe / Handy weglegen."
          },
          {
            question: "Warum braucht auch das Gehirn Pausen?",
            answer: "Damit man sich wieder besser konzentrieren kann."
          }
        ]
      }
    ]
  },
  {
    category: "Körper-Check",
    items: [
      {
        value: 100,
        variants: [
          {
            question: "Was zeigt der Puls?",
            answer: "Wie schnell das Herz schlägt."
          },
          {
            question: "Welches Organ pumpt Blut durch den Körper?",
            answer: "Das Herz."
          },
          {
            question: "Was kann man am Handgelenk oder am Hals fühlen?",
            answer: "Den Puls."
          },
          {
            question: "Was braucht der Körper zum Atmen?",
            answer: "Sauerstoff / Luft."
          }
        ]
      },
      {
        value: 200,
        variants: [
          {
            question: "Womit misst man, ob jemand Fieber hat?",
            answer: "Mit einem Thermometer."
          },
          {
            question: "Was misst ein Blutdruckgerät?",
            answer: "Den Blutdruck."
          },
          {
            question: "Was sagt die Körpertemperatur ungefähr aus?",
            answer: "Ob jemand normal warm ist oder Fieber haben könnte."
          },
          {
            question: "Welche drei Dinge kann man oft checken, wenn es jemandem nicht gut geht?",
            answer: "Puls, Temperatur und Blutdruck."
          }
        ]
      }
    ]
  },
  {
    category: "Hygiene",
    items: [
      {
        value: 100,
        variants: [
          {
            question: "Warum desinfiziert man die Hände?",
            answer: "Damit weniger Keime weitergegeben werden."
          },
          {
            question: "Was sollte man vor dem Essen möglichst tun?",
            answer: "Hände waschen oder desinfizieren."
          },
          {
            question: "Warum hustet oder niest man besser in die Armbeuge?",
            answer: "Damit sich weniger Keime verbreiten."
          },
          {
            question: "Wann ist Händewaschen besonders wichtig?",
            answer: "Nach der Toilette, vor dem Essen oder wenn die Hände schmutzig sind."
          }
        ]
      },
      {
        value: 200,
        variants: [
          {
            question: "Was sollte man tun, wenn man in die Hand gehustet hat?",
            answer: "Hände waschen oder desinfizieren."
          },
          {
            question: "Warum sollte man benutzte Taschentücher direkt entsorgen?",
            answer: "Damit Keime nicht weiter verteilt werden."
          },
          {
            question: "Warum sollte man nicht einfach aus derselben Flasche trinken?",
            answer: "Weil dabei Keime weitergegeben werden können."
          },
          {
            question: "Warum ersetzen Handschuhe nicht automatisch saubere Hände?",
            answer: "Weil Keime trotzdem übertragen werden können, besonders beim An- und Ausziehen."
          }
        ]
      }
    ]
  },
  {
    category: "Erste Hilfe",
    items: [
      {
        value: 100,
        variants: [
          {
            question: "Was sollte man tun, wenn jemand gestürzt ist?",
            answer: "Ruhig bleiben, nachfragen, Hilfe holen und nicht einfach hochziehen."
          },
          {
            question: "Was hilft zuerst, wenn jemandem schwindelig ist?",
            answer: "Hinsetzen lassen, ruhig bleiben und Hilfe holen."
          },
          {
            question: "Was macht man bei einer kleinen blutenden Wunde zuerst?",
            answer: "Sauber machen, schützen und bei Bedarf Hilfe holen."
          },
          {
            question: "Was ist wichtig, wenn jemand sagt: „Mir geht es nicht gut“?",
            answer: "Ernst nehmen, nachfragen und Hilfe holen."
          }
        ]
      },
      {
        value: 200,
        variants: [
          {
            question: "Welche Nummer wählt man in Deutschland bei einem medizinischen Notfall?",
            answer: "112."
          },
          {
            question: "Was sollte man beim Notruf möglichst sagen?",
            answer: "Wo man ist, was passiert ist und wer Hilfe braucht."
          },
          {
            question: "Warum ist Ruhe in einem Notfall so wichtig?",
            answer: "Damit man klar denken und schnell Hilfe holen kann."
          },
          {
            question: "Wann sollte man lieber einmal zu viel Hilfe holen als zu wenig?",
            answer: "Wenn es gefährlich wirkt oder man unsicher ist."
          }
        ]
      }
    ]
  },
  {
    category: "Menschlich",
    items: [
      {
        value: 100,
        variants: [
          {
            question: "Was hilft, wenn jemand Angst hat?",
            answer: "Ruhig bleiben, zuhören und ernst nehmen."
          },
          {
            question: "Was kann helfen, wenn jemand traurig wirkt?",
            answer: "Nachfragen, zuhören und da bleiben."
          },
          {
            question: "Was zeigt Respekt, wenn jemand etwas nicht möchte?",
            answer: "Die Grenze ernst nehmen und nicht drängen."
          },
          {
            question: "Was ist in peinlichen Situationen besonders wichtig?",
            answer: "Diskret bleiben und die Person nicht bloßstellen."
          }
        ]
      },
      {
        value: 200,
        variants: [
          {
            question: "Warum ist Zuhören manchmal genauso wichtig wie Helfen?",
            answer: "Weil man dadurch besser versteht, was die Person braucht."
          },
          {
            question: "Was bedeutet Empathie?",
            answer: "Sich in andere hineinversetzen und ihre Gefühle ernst nehmen."
          },
          {
            question: "Warum ist es besser zu fragen, statt direkt zu urteilen?",
            answer: "Weil man die Situation sonst falsch verstehen kann."
          },
          {
            question: "Warum ist es wichtig, Menschen mit Namen anzusprechen?",
            answer: "Es wirkt persönlicher und zeigt Respekt."
          }
        ]
      }
    ]
  }
];

const STORAGE_KEY = "bfe-jeopardy-solo-v3";
const TOTAL_QUESTIONS = QUESTIONS.reduce((sum, category) => sum + category.items.length, 0);

const els = {
  board: document.querySelector("#board"),
  dialog: document.querySelector("#questionDialog"),
  questionMeta: document.querySelector("#questionMeta"),
  questionTitle: document.querySelector("#questionTitle"),
  answerText: document.querySelector("#answerText"),
  revealAnswer: document.querySelector("#revealAnswer"),
  closeDialog: document.querySelector("#closeDialog"),
  keepQuestion: document.querySelector("#keepQuestion"),
  awardPlayer: document.querySelector("#awardPlayer"),
  missQuestion: document.querySelector("#missQuestion"),
  resetGame: document.querySelector("#resetGame"),
  scoreValue: document.querySelector("#scoreValue"),
  progressValue: document.querySelector("#progressValue"),
  resultDialog: document.querySelector("#resultDialog"),
  resultScore: document.querySelector("#resultScore"),
  resultTitle: document.querySelector("#resultTitle"),
  resultQuote: document.querySelector("#resultQuote"),
  resultText: document.querySelector("#resultText"),
  resultRestart: document.querySelector("#resultRestart"),
  resultClose: document.querySelector("#resultClose")
};

let state = loadState();
let activeQuestion = null;

function defaultState() {
  return {
    score: 0,
    answered: {},
    variants: createVariantChoices()
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const loaded = saved ? { ...defaultState(), ...saved } : defaultState();
    return normalizeState(loaded);
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

function createVariantChoices() {
  const choices = {};

  QUESTIONS.forEach((category, categoryIndex) => {
    category.items.forEach((item, itemIndex) => {
      choices[questionId(categoryIndex, itemIndex)] = randomVariantIndex(item);
    });
  });

  return choices;
}

function randomVariantIndex(item) {
  return Math.floor(Math.random() * item.variants.length);
}

function normalizeState(candidate) {
  const stateWithVariants = {
    ...candidate,
    variants: candidate.variants || {}
  };
  let changed = false;

  QUESTIONS.forEach((category, categoryIndex) => {
    category.items.forEach((item, itemIndex) => {
      const id = questionId(categoryIndex, itemIndex);
      const choice = stateWithVariants.variants[id];

      if (!Number.isInteger(choice) || choice < 0 || choice >= item.variants.length) {
        stateWithVariants.variants[id] = randomVariantIndex(item);
        changed = true;
      }
    });
  });

  if (changed) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateWithVariants));
  }

  return stateWithVariants;
}

function selectedQuestion(categoryIndex, itemIndex) {
  const item = QUESTIONS[categoryIndex].items[itemIndex];
  const id = questionId(categoryIndex, itemIndex);
  const variantIndex = state.variants[id];
  return {
    value: item.value,
    ...item.variants[variantIndex]
  };
}

function answeredCount() {
  return Object.keys(state.answered).length;
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

function renderStatus() {
  els.scoreValue.textContent = state.score;
  els.progressValue.textContent = `${answeredCount()}/${TOTAL_QUESTIONS}`;

  if (activeQuestion) {
    els.awardPlayer.textContent = `Richtig +${activeQuestion.value}`;
  }
}

function openQuestion(categoryIndex, itemIndex) {
  const category = QUESTIONS[categoryIndex];
  const item = selectedQuestion(categoryIndex, itemIndex);
  activeQuestion = {
    ...item,
    id: questionId(categoryIndex, itemIndex),
    category: category.category
  };

  els.questionMeta.textContent = `${activeQuestion.category} · ${activeQuestion.value} Punkte`;
  els.questionTitle.textContent = activeQuestion.question;
  els.answerText.textContent = "Erst antworten , dann Lösung anzeigen. 😊";
  els.answerText.classList.add("is-hidden");
  els.revealAnswer.hidden = false;
  renderStatus();

  if (typeof els.dialog.showModal === "function") {
    els.dialog.showModal();
  } else {
    els.dialog.setAttribute("open", "");
  }
}

function closeQuestion(markAnswered = false) {
  if (activeQuestion && markAnswered) {
    state.answered[activeQuestion.id] = true;
    saveState();
  }

  activeQuestion = null;
  els.dialog.close();
  renderBoard();
  renderStatus();

  if (markAnswered && answeredCount() === TOTAL_QUESTIONS) {
    window.setTimeout(showEndResult, 250);
  }
}

function revealAnswer() {
  if (!activeQuestion) return;
  els.answerText.textContent = `Antwort: ${activeQuestion.answer}`;
  els.answerText.classList.remove("is-hidden");
  els.revealAnswer.hidden = true;
}

function awardPlayer() {
  if (!activeQuestion) return;
  state.score += activeQuestion.value;
  closeQuestion(true);
}

function missQuestion() {
  closeQuestion(true);
}

function resetGame() {
  const shouldReset = window.confirm("Neue Runde starten und Score zurücksetzen?");
  if (!shouldReset) return;

  closeResultDialog();
  state = defaultState();
  saveState();
  renderBoard();
  renderStatus();
}

function restartFromResult() {
  state = defaultState();
  saveState();
  closeResultDialog();
  renderBoard();
  renderStatus();
}

function showEndResult() {
  const maxScore = QUESTIONS.reduce(
    (sum, category) => sum + category.items.reduce((inner, item) => inner + item.value, 0),
    0
  );
  const percent = Math.round((state.score / maxScore) * 100);

  els.resultScore.textContent = `${state.score} / ${maxScore}`;

  if (percent >= 90) {
    els.resultTitle.textContent = "Pflege-Profi-Level";
    els.resultQuote.textContent = "Du hast nicht nur Punkte gesammelt, sondern Haltung gezeigt.";
    els.resultText.textContent = "Stark gespielt. Das war sicher, schnell und ziemlich beeindruckend.❤️";
  } else if (percent >= 65) {
    els.resultTitle.textContent = "Sehr gutes Gespür";
    els.resultQuote.textContent = "Pflege beginnt da, wo Aufmerksamkeit zu Verantwortung wird.";
    els.resultText.textContent = "Du hast viele Situationen richtig eingeschätzt. Genau dieses Bauchgefühl zählt in der Pflege.❤️";
  } else if (percent >= 40) {
    els.resultTitle.textContent = "Guter Start";
    els.resultQuote.textContent = "Jede richtige Entscheidung fängt mit Hinschauen an.";
    els.resultText.textContent = "Da ist schon viel richtig dabei. Pflege lernt man Schritt für Schritt, und du bist drin.❤️";
  } else {
    els.resultTitle.textContent = "Weiter ausprobieren";
    els.resultQuote.textContent = "Nicht perfekt gestartet, aber neugierig geblieben. Das zählt.";
    els.resultText.textContent = "Noch Luft nach oben, aber genau dafür ist die Challenge da. Neue Runde, neues Gefühl.❤️";
  }

  if (typeof els.resultDialog.showModal === "function") {
    els.resultDialog.showModal();
  } else {
    els.resultDialog.setAttribute("open", "");
  }
}

function closeResultDialog() {
  if (!els.resultDialog.open) return;
  els.resultDialog.close();
}

els.revealAnswer.addEventListener("click", revealAnswer);
els.closeDialog.addEventListener("click", () => closeQuestion(false));
els.keepQuestion.addEventListener("click", () => closeQuestion(false));
els.awardPlayer.addEventListener("click", awardPlayer);
els.missQuestion.addEventListener("click", missQuestion);
els.resetGame.addEventListener("click", resetGame);
els.resultRestart.addEventListener("click", restartFromResult);
els.resultClose.addEventListener("click", closeResultDialog);

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
renderStatus();
