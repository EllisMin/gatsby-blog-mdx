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
> Texts goes here
>
> > This is nested blockquote
>
> More Texts

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
