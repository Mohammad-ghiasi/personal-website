export interface blogtype {
  id: number;
  name: string;
  content: string;
  headingText: string;
  image: string;
  author: string;
  url: string;
}

export const blogData: blogtype[] = [
  {
    id: 1,
    name: "Audience",
    headingText: 'How To Own Your Audience By Creating An Email List',
    image: '/images/blog-post-1.jpg',
    author: 'ghiasi',
    url: 'blog/Audience',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    name: "Toolkits",
    headingText: 'Top 10 Toolkits For Deep Learning In 2020',
    image: '/images/blog-post-2.jpg',
    author: 'ghiasi',
    url: 'blog/Toolkits',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    name: "Accessibility",
    headingText: 'Everything You Need To Know About Web Accessibility',
    image: '/images/blog-post-3.jpg',
    author: 'ghiasi',
    url: 'blog/Accessibility',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    name: "InjectHumor",
    headingText: 'How To Inject Humor & Comedy Into Your Brand',
    image: '/images/blog-post-4.jpg',
    author: 'ghiasi',
    url: 'blog/InjectHumor',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    name: "WomenInWebDesign",
    headingText: 'Women In Web Design: How To Achieve Success',
    image: '/images/blog-post-5.jpg',
    author: 'afsaneh',
    url: 'blog/WomenInWebDesign',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    name: "Evergreen",
    headingText: 'Evergreen Versus Topical Content: An Overview',
    image: '/images/blog-post-6.jpg',
    author: 'ghiasi',
    url: 'blog/Evergreen',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const blogFinder = (blogname: string): blogtype | undefined => {
  return blogData.find((item: blogtype) => item.name === blogname);
};