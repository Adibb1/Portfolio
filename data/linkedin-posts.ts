// LINKEDIN POSTS
//
// LinkedIn does not let websites read your posts automatically
// for free:
//
//   1. Open post on LinkedIn.
//   2. Click "Copy link to post".
//   3. Add a new item at the list below.
//   4. Save the file.
//
/*
  {
    date: "2026-11-17",
    title: "Short title for the post",
    summary: "One or two sentences about what the post says.",
    url: "https://www.linkedin.com/posts/....",
  },
*/

export type LinkedInPost = {
  date: string; // YYYY-MM-DD
  title: string;
  summary: string;
  url: string;
};

export const linkedinPosts: LinkedInPost[] = [
  {
    date: "2026-11-16",
    title: "Haven KL game jam at Microsoft Malaysia",
    summary:
      "Spent the weekend at Microsoft Malaysia, Menara Shell for Haven KL, a two-day game jam organized by Hack Club.",
    url: "https://www.linkedin.com/in/muhammad-adib-bin-adnan-95b76a2aa/recent-activity/all/",
  },
];
