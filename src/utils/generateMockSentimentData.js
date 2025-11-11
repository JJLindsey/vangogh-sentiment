export function generateMockSentimentData() {
  const comments = [];
  const sources = ['reddit', 'twitter', 'instagram', 'museum_review'];
  const subreddits = ['art', 'museum', 'vangogh', 'ArtHistory', 'painting'];

  // Generate data over the past 5 years
  const endDate = new Date();
  const startDate = new Date();
  startDate.setFullYear(endDate.getFullYear() - 5);

  // Sample realistic comments about Van Gogh
  const commentTemplates = [
    { text: "Van Gogh's Starry Night is absolutely mesmerizing. The brushwork is incredible.", sentiment: 0.8 },
    { text: "Just visited the Van Gogh Museum in Amsterdam. Life changing experience!", sentiment: 0.9 },
    { text: "His use of color is revolutionary. Nobody painted like Van Gogh.", sentiment: 0.85 },
    { text: "The Bedroom painting feels so intimate and personal.", sentiment: 0.75 },
    { text: "Sunflowers is overrated honestly, but his lesser known works are amazing.", sentiment: 0.4 },
    { text: "Van Gogh's mental health struggles make his work even more poignant.", sentiment: 0.6 },
    { text: "The immersive Van Gogh experience was disappointing, just a cash grab.", sentiment: -0.3 },
    { text: "Irises is one of the most beautiful paintings I've ever seen.", sentiment: 0.9 },
    { text: "His portraits capture something deeply human.", sentiment: 0.8 },
    { text: "The tragedy of his life overshadows discussions of his technique.", sentiment: 0.3 },
    { text: "Van Gogh is everywhere now - on socks, mugs, everything. Kind of cheapens it.", sentiment: -0.2 },
    { text: "His letters to Theo are as moving as his paintings.", sentiment: 0.85 },
    { text: "Post-Impressionism peaked with Van Gogh.", sentiment: 0.9 },
    { text: "The self-portraits show such vulnerability and strength.", sentiment: 0.8 },
    { text: "Wheat Field with Cypresses takes my breath away every time.", sentiment: 0.95 },
  ];

  // Generate 300 comments over time
  for (let i = 0; i < 300; i++) {
    const randomDate = new Date(
      startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
    );

    const template = commentTemplates[Math.floor(Math.random() * commentTemplates.length)];

    // Add to sentiment to make it more realistic
    const sentimentNoise = (Math.random() - 0.5) * 0.2;
    const finalSentiment = Math.max(-1, Math.min(1, template.sentiment + sentimentNoise));

    comments.push({
      text: template.text,
      created_utc: randomDate,
      source: sources[Math.floor(Math.random() * sources.length)],
      subreddit: subreddits[Math.floor(Math.random() * subreddits.length)],
      sentimentScore: finalSentiment
    });
  }

  return comments.sort((a, b) => a.created_utc - b.created_utc);
}
