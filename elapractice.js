
  let qs = [
    {
      "q": "What is the abbreviation for INDIRECT characterization?",
      "a": "STEAL",
      "e": "STEAL. S for Speech, T for Thoughts, E for Effect on others, A for Actions, L for Looks."
    },
    {
      "q": "Is Ron Weasley a primary character?",
      "a": "No",
      "e": "Ron Weasley is a secondary character because although he shows up a lot, he goes through no development and only exists to help develop Harry."
    },
    {
      "q": "Is Harry Potter a primary character?",
      "a": "Yes",
      "e": "Harry Potter is a primary character because he shows up a lot, he goes through development and he is dynamic"
    },
    {
      "q": "Is this correct syntax for citation? \"The quick brown fox jumps over the lazy [Unwilling to do work] dog.\" (Curtis)",
      "a": "No",
      "e": "Correct quote and citation format is the quote, but the last sentence loses the period and the period goes after the parenthesis. Like so: \"The quick brown fox jumps over the lazy [Unwilling to do work] dog\" (Curtis)."
    },
    {
      "q": "True or false: Thematic statements can directly specify a person.",
      "a": "False",
      "e": "False. Thematic statements are universal and apply to everyone. They can indirectly specify someone, but it must also apply to everyone."
    },
    {
      "q": "Is this sentence grammatically correct: The author of Harry Potter, J. K. Rowling writes, \"You're a wizard, Harry\" (Rowling 64). This shows that Harry is a wizard; he is also smart. (NOT PART OF QUESTION, BUT THIS CITATION IS NOT A CORRECT CITATION) ",
      "a": "Yes",
      "e": "Correct quote and citation format is the quote. There are no other gramatical errors."
    },
  ]
  let currentQ = qs[Math.round(Math.random() * (qs.length - 1))];
  let ans = currentQ.a;
  function updateQuestion() {
    currentQ = qs[Math.round(Math.random() * (qs.length - 1))];
    ans = currentQ.a;
    document.querySelector('#e').innerHTML = '';
    document.querySelector('#q').innerHTML = currentQ.q;
  }
  function checkAnswer() {
    if (`${document.querySelector('#answer').value}`.toLowerCase() == `${ans}`.toLowerCase()) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    document.querySelector('#e').innerHTML = currentQ.e;
  }