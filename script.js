const surprises = {
  letter: {
    emoji: "💌",
    title: "A letter just for you",
    text: `Happy Birthday, sunshine! 💗

Today is a reminder of how wonderful you are and how much happiness you deserve. I hope you wake up feeling loved, spend your day surrounded by warmth, and find little reasons to smile in every moment.

You deserve the kind of happiness that stays long after the candles are blown out—the unexpected laughs, the comforting conversations, the dreams that come true, and the memories you’ll look back on with a full heart.

I hope this new chapter brings you beautiful opportunities, kind people, exciting adventures, and the courage to keep reaching for everything you wish for. And on the days when things feel a little difficult, I hope you remember how special you are and how much good you bring into the world.

Keep being your lovely, one-of-a-kind self. Never stop dreaming, laughing, or finding magic in the little things.

May your birthday be as sweet, bright, and lovely as you are. Happy Birthday! 🎂💕`
  },

  memory: {
    emoji: "📸",
    title: "A little memory to keep",
    text: `Some of the loveliest memories are made from the simplest things: a shared laugh, a silly moment, a conversation that lasts longer than expected, or a day that turns out better than planned.

Those little moments remind us that happiness doesn’t always need a big occasion. Sometimes, it’s simply being present and appreciating the people and experiences that make life feel special.

Here’s to keeping the beautiful memories close—and making many, many more. 🌷`
  },

  wish: {
    emoji: "🌟",
    title: "A wish for your new year",
    text: `I’m wishing you a year filled with peaceful mornings, joyful surprises, new adventures, and dreams that slowly become real.

May you find reasons to be proud of yourself, people who cheer you on, and moments that make you think, “I’m so glad I’m here.”

May this year bring you more laughter than worries, more kindness than you expect, and more beautiful memories than you can count.

You deserve so many good things. Happy Birthday! ✨`
  },

  gift: {
    emoji: "🎁",
    title: "A tiny gift from this little page",
    text: `Your gift is a reminder that you are worth celebrating—not only today, but all year long.

So here’s a little virtual bundle of hugs, happy thoughts, good luck, and wishes for everything your heart is hoping for.

Unwrap this moment, make a wish, and remember: the world is a little brighter with you in it. 💖`
  }
};

const surpriseCards = document.querySelectorAll(".surprise-card");
const surpriseBox = document.getElementById("surpriseBox");
const surpriseEmoji = document.getElementById("surpriseEmoji");
const surpriseTitle = document.getElementById("surpriseTitle");
const surpriseText = document.getElementById("surpriseText");
const closeSurprise = document.getElementById("closeSurprise");

surpriseCards.forEach((card) => {
  card.addEventListener("click", () => {
    const surprise = surprises[card.dataset.surprise];

    if (!surprise) return;

    surpriseEmoji.textContent = surprise.emoji;
    surpriseTitle.textContent = surprise.title;
    surpriseText.textContent = surprise.text;

    surpriseBox.classList.remove("hidden");
    surpriseBox.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});

closeSurprise.addEventListener("click", () => {
  surpriseBox.classList.add("hidden");
});

const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");

giftButton.addEventListener("click", () => {
  giftMessage.classList.remove("hidden");
  giftButton.textContent = "Gift opened! 💗";
  giftButton.disabled = true;
});
