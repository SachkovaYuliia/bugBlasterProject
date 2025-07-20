import React from "react";
import TicktItem from "./TicketItem";

export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicktItem
          key={ticket.id}
          dispath={dispatch}
          ticket={ticket}
        ></TicktItem>
      ))}
    </div>
  );
}
