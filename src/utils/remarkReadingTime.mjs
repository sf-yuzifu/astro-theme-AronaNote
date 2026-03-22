import { toString } from 'mdast-util-to-string';
import readingTime from 'reading-time';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTimeResult = readingTime(textOnPage);
    // readingTime.words 给出了大概的字数
    data.astro.frontmatter.minutesRead = readingTimeResult.text;
    data.astro.frontmatter.wordCount = readingTimeResult.words;
  };
}