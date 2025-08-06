// Shared functions to handle text data as rows
function getRows() {
  const raw = localStorage.getItem("textData") || "";
  return raw.trim().split("\n").map(row => row.split(","));
}

function saveRows(rows, filename = "updated.txt") {
  const content = rows.map(row => row.join(",")).join("\n");
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}
