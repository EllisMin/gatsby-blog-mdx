import React from "react"

const DisqusComments = ({ shortName, location }) => {
  var disqus_config = function() {
    this.page.url = location
    this.page.identifier = new Date().getTime()
  }
  // To remove warning
  if (false) {
    disqus_config()
  }
  ;(function() {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script")
    s.src = `https://${shortName}.disqus.com/embed.js`
    s.setAttribute("data-timestamp", +new Date())
    ;(d.head || d.body).appendChild(s)
  })()
  return (
    <>
      <script
        id="dsq-count-scr"
        src="//ellismin.disqus.com/count.js"
        async
      ></script>
      <div id="disqus_thread"></div>
    </>
  )
}

export default DisqusComments
