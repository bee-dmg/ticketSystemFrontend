import TicketType from "../interfaces/TicketInterface";
function apiCall(
  setTickets?: Function,
  url?: string,
  methodType?: string,
  ticket?: TicketType
) {
  const apiEndPoint = "http://localhost:8080/api/tickets";

  if (url) {
    fetch(apiEndPoint + url, {
      method: methodType, // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  if (setTickets) {
    fetch(apiEndPoint)
      .then((response) => response.json())
      .then((data) => {
        setTickets(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setTickets([]);
      });
  }
}

export default apiCall;
