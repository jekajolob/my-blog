async function loadMarkdown(file) {
  const response = await fetch(file)
  const text = await response.text()
  return text
}

function renderMarkdown(content) {
  // Convert markdown to HTML (basic conversion)
  return content
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
    .replace(/\n$/gim, '<br />')
}

async function displayPost(filename) {
  const markdownContent = await loadMarkdown(`posts/${filename}`)
  document.getElementById('content').innerHTML = renderMarkdown(markdownContent)
}

// Example: Load the first post by default
displayPost('post1.md')
displayPost('post2.md')
displayPost('post3.md')
