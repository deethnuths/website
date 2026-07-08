fetch("/links.json")
  .then((res) => res.json())
  .then((links) => {
    const list = document.getElementById("links");
    for (const { label, url } of links) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.textContent = label;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      list.appendChild(li);
    }
  });
