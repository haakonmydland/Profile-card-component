# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

![](./ScreenshotDesk.png)
![](./ScreenshotMobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) - JS library

### What I learned

Since this project was pretty simple I focused on creating a reusable component, and adding a few functionalities to make it more usable.

This means that all the text in the component is changeable on the top level on the component. I also included standard texts, so that if nothing is input it does not break the component.

---

The component is added to the DOM like this

```tsx
<Card
  HeaderImage={headerImg}
  ProfileImage={ppf}
  Name="Victor Crest"
  Age={26}
  Location="London"
  Followers={80000}
  Likes={803000}
  Photos={1400}
/>
```

If title is not declared it will default to title, the same goes for all other parameters

```tsx
<h1 className={style.Title}>{Title ? Title : "Title"}</h1>
```

---

I also included a function to turn the statistics into a more readable format. This function takes a number and formats it based so that thousands get a K after, million get an M, and so on.

```ts
export function nFormatter(num: number) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
}
```

## Author

- Website - [Haakon Mydland](https://www.haakonmydland.com/home)
- Frontend Mentor - [@haakonmydland](https://www.frontendmentor.io/profile/haakonmydland)
- Twitter - [@haakonmydland](https://www.twitter.com/haakonmydland)
