---
title: "Sample Post"
date: 2020-03-09
tags: [category1, category2]
---

<!-- Headings -->

# H1 Heading

## H2 Heading

### H3 Heading

<!-- Texts -->

Here's some basic text

Here's some _italics_

Here's some **bold** text

Here's some **_bold italics_** text

Here's some ~~strikethrough~~ text

<!-- Link -->

[Click here](https://google.com)

<!-- Image -->

![](../images/somePhoto.jpeg)

<!-- Any HTML -->
<div style="color: pink"><span>Hello</span></div>

<!-- Lists - numbered -->

1. First
2. Second

<!-- Lists - bulleted -->

- List
- List

<!-- blockquote -->

> Here is example of blockquote
>
> Est est ipsum tempor eu occaecat. Duis commodo laboris voluptate reprehenderit minim laborum ad deserunt ut magna. Lorem laborum ut officia eu nulla pariatur nulla eiusmod aliquip. Fugiat laboris consectetur tempor anim fugiat.

<!-- Nested blockquote -->

> > Cupidatat aute ea incididunt dolor mollit ipsum. Eu culpa dolor deserunt nostrud do et commodo consequat. Fugiat tempor sunt qui laborum nulla nostrud eu dolore voluptate non in. Id exercitation consectetur elit voluptate ea et nulla ea ea amet labore sunt ullamco ullamco.

> > > Cupidatat aute ea incididunt dolor mollit ipsum. Eu culpa dolor deserunt nostrud do et commodo consequat. Fugiat tempor sunt qui laborum nulla nostrud eu dolore voluptate non in. Id exercitation consectetur elit voluptate ea et nulla ea ea amet labore sunt ullamco ullamco.

<!-- Inline code -->

Here is `in-line code block` example

<!-- Code block -->

```js
const name = "Ellis"
console.log(name)
```

<!-- Code block (highlight) -->

```jsx
import React, { Component } from "react"
class Profile extends Component {
  // highlight-line
  render() {
    return <div></div> // highlight-line
  }
}
export default Profile
```

<!-- Code block with title -->

```js:title=example.js
const number 1234;
```

<!-- Bash -->

```bash{promptUser: Ellis}{outputLines: 2}
some shell prompt
some shell prompt
```

<!-- Diff -->

```diff
+ {
+ import React, { Component } from "react"
+
+ class SomeClass extends Component {
-  render() {
-    return (<div></div>)
-   }
+ }
+ export default SomeClass
```

# Tip

If you're using VS Code, I recommend installing an extension, `Markdown All in One` for shortcuts & preview of markdown
