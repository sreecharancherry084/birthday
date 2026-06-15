/**
 * Media Configuration
 * Centralized config for all photos and videos used throughout the site.
 * Photos and videos are served from the public/ directory.
 */

// All photos from the Photos/ folder (now in public/photos/)
export const photos = [
  { id: 1, src: '/photos/photo3.jpeg', caption: 'Beautiful', memory: 'Aesthetic' },
  { id: 2, src: '/photos/photo4.jpeg', caption: 'Classic', memory: 'Nice click' },
  { id: 3, src: '/photos/photo5.jpeg', caption: 'Aesthetic', memory: 'Aesthetic' },
  { id: 4, src: '/photos/photo6.jpeg', caption: 'Lovely outfit', memory: 'Lovely outfit' },
  { id: 5, src: '/photos/photo7.jpeg', caption: 'Lovely outfit', memory: 'Looking sharp' },
  { id: 6, src: '/photos/photo8.jpeg', caption: 'Aesthetic', memory: 'Great lighting' },
  { id: 7, src: '/photos/photo9.jpeg', caption: 'Pretty', memory: 'Nice portrait' },
  { id: 8, src: '/photos/photo10.jpeg', caption: 'Beautiful shot', memory: 'Great picture' },
  { id: 9, src: '/photos/photo11.jpeg', caption: 'Chilling', memory: 'Relaxed' },
  { id: 10, src: '/photos/photo12.jpeg', caption: 'Vibes', memory: 'Nice background' },
  { id: 11, src: '/photos/photo14.jpeg', caption: 'Smile', memory: 'Lovely' },
  { id: 12, src: '/photos/photo16.jpeg', caption: 'Amazing', memory: 'Wow' },
  { id: 13, src: '/photos/photo18.jpeg', caption: 'Nice click', memory: 'Great photo' },
  { id: 14, src: '/photos/photo19.jpeg', caption: 'Candid', memory: 'Caught off guard' },
  { id: 15, src: '/photos/photo20.jpeg', caption: 'Aesthetic vibes', memory: 'Cool' },
  { id: 16, src: '/photos/photo21.jpeg', caption: 'Candid moment', memory: 'Nice' },
  { id: 17, src: '/photos/photo22.jpeg', caption: 'Beautiful day', memory: 'Sunlight' },
  { id: 18, src: '/photos/photo23.jpeg', caption: 'Casual', memory: 'Everyday' },
  { id: 19, src: '/photos/photo24.jpeg', caption: 'Lovely', memory: 'Classic' },
  { id: 20, src: '/photos/photo25.jpeg', caption: 'Beautiful', memory: 'Vibe' },
  { id: 21, src: '/photos/photo26.jpeg', caption: 'Great click', memory: 'Memorable' }
];

// Videos from the shorts/ folder (now in public/videos/)
export const videos = [
  { id: 1, src: '/videos/video1.mp4', title: 'Memory Reel #1', caption: 'A moment frozen in time' },
  { id: 2, src: '/videos/video2.mp4', title: 'Memory Reel #2', caption: 'The adventure continues' },
];

// Timeline memories - pairs photos with story moments
export const timelineMemories = [
  { photo: { src: '/photos/born baby.jpeg' }, title: 'The Beginning', caption: 'Baby picture', year: 'Early Days' },
  { photo: { src: '/photos/childhood together.jpeg' }, title: 'Childhood Era', caption: 'Childhood snapshot', year: 'Childhood' },
  { photo: photos[0], title: 'Golden Hour', caption: 'A lovely portrait', year: 'Sunkissed' },
  { photo: photos[2], title: 'Traditional Vibes', caption: 'Casual click', year: 'Beautiful' },
  { photo: photos[5], title: 'Saree Look', caption: 'Aesthetic photo', year: 'Elegant' },
  { photo: photos[8], title: 'Sweet Smile', caption: 'Nice lighting', year: 'Happy Times' },
  { photo: photos[12], title: 'Candid Shot', caption: 'A beautiful shot', year: 'Perfect' },
  { photo: photos[16], title: 'Beautiful Day', caption: 'Looking great', year: 'Memories' },
];

// Achievements data
export const achievements = [
  { icon: '🏆', title: 'Professional Overthinker', desc: 'Mastered the art of overthinking everything', rarity: 'LEGENDARY' },
  { icon: '👑', title: 'Certified Drama Queen', desc: 'Drama level: Oscar-worthy performances daily', rarity: 'MYTHIC' },
  { icon: '⏰', title: 'Late Replies', desc: 'Will reply to your message in 3-5 business days', rarity: 'EPIC' },
  { icon: '😴', title: 'Sleeping Champion', desc: 'Can sleep anywhere, anytime, any position', rarity: 'LEGENDARY' },
  { icon: '🌪️', title: 'Chaos Generator', desc: 'Turns any calm situation into absolute chaos', rarity: 'MYTHIC' },
  { icon: '🏃‍♀️', title: 'Busiest Person', desc: 'Always busy doing absolutely nothing', rarity: 'RARE' },
  { icon: '🎭', title: 'Mood Swing Master', desc: 'Happy → Sad → Hungry in 0.3 seconds', rarity: 'EPIC' },
  { icon: '💅', title: 'Sass Level: Maximum', desc: 'Can roast you with just one eyebrow raise', rarity: 'LEGENDARY' },
];

// Stats for the analytics section
export const friendshipStats = [
  { label: 'Laughs Shared', value: 9999, suffix: '+' },
  { label: 'Photos Together', value: 0, suffix: '', displayText: 'Very less 🥲' },
  { label: 'Bad Decisions', value: 0, suffix: '', displayText: 'Too Many' },
  { label: 'Arguments Won By Me', value: 100, suffix: '%' },
  { label: 'Inside Jokes', value: 847, suffix: '' },
  { label: 'Late Night Talks', value: 2563, suffix: '+' },
  { label: 'Food Shared', value: 0, suffix: '', displayText: 'Never' },
  { label: 'Friendship Level', value: 0, suffix: '', displayText: '∞' },
];

// Reasons you're awesome
export const awesomeReasons = [
  { title: 'Your Laugh', desc: 'It\'s contagious and can cure any bad day instantly' },
  { title: 'Your Loyalty', desc: 'You show up when it matters most, every single time' },
  { title: 'Your Humor', desc: 'You can make even the worst situations hilariously bearable' },
  { title: 'Your Heart', desc: 'You care deeply, even when you pretend not to' },
  { title: 'Your Energy', desc: 'You light up every room you walk into' },
  { title: 'Your Strength', desc: 'You\'ve handled things that would break most people' },
  { title: 'Your Weirdness', desc: 'Normal is boring. You\'re beautifully, perfectly weird' },
  { title: 'Your Friendship', desc: 'Having you as a bestie is the greatest gift life gave me' },
];

// Quiz questions
export const quizQuestions = [
  {
    question: 'Who is the better friend?',
    options: ['Me, obviously', 'You, duh', 'Both of us equally'],
    response: 'Nice try! The correct answer is: ME. Always has been, always will be. 😎'
  },
  {
    question: 'Who is the funniest?',
    options: ['Me', 'You', 'We\'re both hilarious'],
    response: 'Wrong! I am clearly the comedian here. You just laugh at my jokes. 🎤'
  },
  {
    question: 'Who gives the best advice?',
    options: ['Me', 'You', 'Neither, we wing it'],
    response: 'The answer is me. You just never follow my advice anyway! 🧠'
  },
  {
    question: 'Who is more dramatic?',
    options: ['You, 100%', 'Me, maybe?', 'We\'re both dramatic'],
    response: 'It\'s definitely you. And we both know it. 🎭'
  },
  {
    question: 'Who would survive a zombie apocalypse?',
    options: ['Me, I\'m resourceful', 'You, you\'d charm them', 'We\'d argue and both die'],
    response: 'Let\'s be real — we\'d be arguing about snacks while zombies approach. 🧟'
  },
];

// Secret letters content
export const secretLetters = [
  {
    title: 'The Funny One 😂',
    color: '#ff6b9d',
    content: `Dear Bestie,

One thing from our childhood that still makes me laugh is when you came to my house with your dad and happily ate slate pencils! 😆 I hope you've managed to control that habit by now.

Also, my friend and I somehow lost your color-mixing tray. You cried so much, and we were secretly watching from the side while you convinced your dad to buy you a new one. 😂

The funniest part is that even though we studied in the same school for years, we barely spoke a word to each other. But every birthday, you would still give me a big chocolate. That was really sweet and is something I'll always remember. ❤️

Your Superior Friend ✨`
  },
  {
    title: 'Our Memories 💫',
    color: '#a855f7',
    content: `Dear Bestie,

From our very first conversation to now, every moment with you has been a core memory.

The late-night talks that solved zero problems but made us feel better. The spontaneous adventures. The "let's just stay in" nights that turned into the best stories.

One of my favorite childhood memories is our dance together on "Aao Sunao Pyar Ki Ek Kahani". The funny part is that we performed it without even talking to each other! ❤️

I'm still a little sad that the recording is missing, but the memory remains beautiful. Hopefully, we can create many more memories together in the future. ✨

I wouldn't trade a single memory. Not even the embarrassing ones.

Forever grateful ❤️`
  },
  {
    title: 'Birthday Wish 🎂',
    color: '#3b82f6',
    content: `Dear Bestie,

Happy Birthday to the most incredible, annoying, lovable, dramatic, caring, chaotic, and wonderful human I know.

You deserve every happiness this world has to offer. You deserve every laugh, every adventure, every dream come true.

On your special day, I want you to know: meeting you was the best plot twist in my life story.

Here's to another year of making memories, breaking rules, and being the iconic duo we are.

Happy Birthday. I love you, bestie. 🎂✨❤️

Always yours,
Your Best Friend Forever`
  },
];
