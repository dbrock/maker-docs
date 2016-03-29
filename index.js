sections = []
;[].forEach.call(document.querySelectorAll("h2, h3"), x => {
if (x.tagName == "H2") {
sections.push({ heading: x, subheadings: [] })
var n = sections.length
x.innerText = `${n}. ${x.innerText}`
x.id = `section-${n}`
} if (x.tagName == "H3") {
var section = sections[sections.length - 1]
section.subheadings.push(x)
var n = sections.length
var m = section.subheadings.length
x.innerText = `${n}.${m}. ${x.innerText}`
x.id = `section-${n}-${m}`
}
})

document.querySelector("#toc").innerHTML = `
<h2>Table of contents</h2>
<p><ol>
${[].map.call(sections, x => `
<li> <a href=#${x.heading.id}>${x.heading.innerText}</a>
<ol>
${[].map.call(x.subheadings, x => `
<li> <a href=#${x.id}>${x.innerText}</a>
`).join("")}
</ol>
`).join("")}
</ol></p>
`
