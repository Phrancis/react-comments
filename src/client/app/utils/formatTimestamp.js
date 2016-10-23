function formatTimestamp(timestamp) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }
  return timestamp.toLocaleTimeString("en-us", options)
}

export default formatTimestamp